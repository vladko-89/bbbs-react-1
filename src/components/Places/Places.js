/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import MainMentor from '../MainMentor/MainMentor';
import PlacesCards from '../PlacesCards/PlacesCards';
import Preloader from '../Preloader/Preloader';
import Pagination from '../Pagination/Pagination';
import PopupRecommend from '../PopupRecommend/PopupRecommend';
import PopupRecommendSuccess from '../PopupRecommendSuccess/PopupRecommendSuccess';

import api from '../../utils/Api';
import CurrentUserContext from '../../contexts/CurrentUser';
import { getAccessToken } from '../../utils/utils';
import { PLACES_PER_PAGE } from '../../utils/constants';
import './Places.scss';

function Places({
  loggedIn, openChangeCity, activeRubrics, selectRubric,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [popupRecommendOpened, setPopupRecommendOpened] = React.useState(false);
  const [popupRecommendSuccessOpened, setPopupRecommendSuccessOpened] = React.useState(false);

  const toggleRecommendPopup = () => {
    setPopupRecommendOpened(!popupRecommendOpened);
  };
  const toggleRecommendSuccessPopup = () => {
    setPopupRecommendSuccessOpened(!popupRecommendSuccessOpened);
  };
  React.useEffect(() => {
    if (!loggedIn && !localStorage.getItem('bbbs-user')) {
      openChangeCity(true);
    }
  }, []);
  const [isLoading, setIsLoading] = React.useState(true);
  const [tags, setTags] = React.useState([]);
  const [places, setPlaces] = React.useState([]);
  function onPageChange(page) {
    const offset = page !== 1 ? page * PLACES_PER_PAGE - PLACES_PER_PAGE : 0;
    api
      .getPlaces({
        token: getAccessToken(),
        cityId: currentUser.city.id,
        limit: PLACES_PER_PAGE,
        offset,
        tags: activeRubrics,
      })
      .then((res) => setPlaces(res));
  }

  React.useEffect(() => {
    Promise.all([
      api.getPlacesTags({
        token: getAccessToken(),
        cityId: currentUser.city.id,
      }),
      api.getPlaces({
        token: getAccessToken(),
        cityId: currentUser.city.id,
        limit: PLACES_PER_PAGE,
      }),
    ])
      .then(([resTags, resPlaces]) => {
        setTags([
          {
            id: 0,
            name: 'Все',
            slug: 'all',
          },
          {
            id: -1,
            name: 'Выбор наставников',
            slug: 'true',
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
        limit: PLACES_PER_PAGE,
        offset: 0,
        tags: activeRubrics,
      })
      .then((res) => {
        onPageChange(1);
        setPlaces(res);
      })
      // eslint-disable-next-line no-console
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
      {loggedIn && (
      <div className="card place-card">
        <h2 className="section-title place-card__text">
          Если вы были в интересном месте и хотите порекомендовать его другим наставникам –
          <span role="button" tabIndex="0" onClick={toggleRecommendPopup} className="place-card__span-accent">заполните форму</span>
          , и мы добавим вашу
          рекомендацию.
        </h2>
      </div>
      )}
      <MainMentor
        id={places?.results[0]?.id}
        title={places?.results[0]?.title}
        chosen={places?.results[0]?.chosen}
        address={places?.results[0]?.address}
        imageUrl={places?.results[0]?.imageUrl}
        link={places?.results[0]?.link}
        info={places?.results[0]?.info}
        description={places?.results[0]?.description}
      />
      <PlacesCards places={places.results} />
      {(places.count > PLACES_PER_PAGE) && (
        <Pagination
          cardsLength={places.count}
          cardsPerPage={PLACES_PER_PAGE}
          onPageChange={onPageChange}
        />
      ) }
      { popupRecommendOpened && (
      <PopupRecommend
        onSuccess={toggleRecommendSuccessPopup}
        onClose={toggleRecommendPopup}
      />
      )}
      { popupRecommendSuccessOpened
      && (
      <PopupRecommendSuccess
        onClose={toggleRecommendSuccessPopup}
      />
      )}
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
