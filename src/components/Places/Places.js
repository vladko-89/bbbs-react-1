import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import MainMentor from '../MainMentor/MainMentor';
import PlacesCards from '../PlacesCards/PlacesCards';
import Preloader from '../Preloader/Preloader';
import Pagination from '../Pagination/Pagination';
import api from '../../utils/Api';
import CurrentUserContext from '../../contexts/CurrentUser';
import { getAccessToken } from '../../utils/utils';
import { placesPerPage } from '../../utils/Constants';

function Places({
  loggedIn, openChangeCity, activeRubrics, selectRubric,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    if (!loggedIn && !localStorage.getItem('bbbs-user')) {
      openChangeCity(true);
    }
  }, []);
  const [isLoading, setIsLoading] = React.useState(true);
  const [tags, setTags] = React.useState([]);
  const [places, setPlaces] = React.useState([]);

  function onPageChange(page) {
    console.log(page);
    const offset = page !== 1 ? page * placesPerPage - placesPerPage : 0;
    api
      .getPlaces({
        token: getAccessToken(),
        cityId: currentUser.city.id,
        limit: placesPerPage,
        offset,
        tags: activeRubrics,
      })
      .then((res) => setPlaces(res));
  }

  React.useEffect(() => {
    Promise.all([
      api.getPlacesTags(),
      api.getPlaces({
        token: getAccessToken(),
        cityId: currentUser.city.id,
        limit: placesPerPage,
      }),
    ])
      .then(([resTags, resPlaces]) => {
        setTags([
          {
            id: 0,
            name: 'Все',
            slug: 'all',
          },
          ...resTags.results,
        ]);
        setPlaces(resPlaces);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    api
      .getPlaces({
        token: getAccessToken(),
        cityId: currentUser.city.id,
        limit: placesPerPage,
        offset: 0,
        tags: activeRubrics,
      })
      .then((res) => {
        onPageChange(1);
        setPlaces(res);
      })
      .catch((err) => console.log(err));
  }, [activeRubrics]);

  return isLoading ? (
    <Preloader />
  ) : (
    <div className="main">
      <section className="lead page__section">
        <MainTitle title="Куда пойти" />
        <Filter array={tags} selectRubric={selectRubric} />
      </section>
      <MainMentor
        id={places.results[0]?.id}
        title={places.results[0]?.title}
        chosen={places.results[0]?.chosen}
        address={places.results[0]?.address}
        imageUrl={places.results[0]?.imageUrl}
        link={places.results[0]?.link}
        info={places.results[0]?.info}
        description={places.results[0]?.description}
      />
      <PlacesCards places={places.results} />
      {places.count > placesPerPage ? (
        <Pagination
          cardsLength={places.count}
          cardsPerPage={placesPerPage}
          onPageChange={onPageChange}
        />
      ) : ''}
    </div>
  );
}

Places.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  openChangeCity: PropTypes.func.isRequired,
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
};

export default Places;
