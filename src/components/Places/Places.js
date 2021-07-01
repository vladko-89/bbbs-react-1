import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import MainMentor from '../MainMentor/MainMentor';
import PlacesCards from '../PlacesCards/PlacesCards';
import Preloader from '../Preloader/Preloader';
import api from '../../utils/Api';

function Places({
  selectRubric,
}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [tags, setTags] = React.useState([]);
  const [places, setPlaces] = React.useState([]);
  React.useEffect(() => {
    Promise.all([
      api.getPlacesTags(),
      api.getPlaces(),
    ])
      .then(([resTags, resPlaces]) => {
        console.log(resPlaces);
        setTags([{
          id: 0,
          name: 'Все',
          slug: 'all',
        }, ...resTags.results]);
        setPlaces(resPlaces);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return isLoading ? (<Preloader />) : (
    <div className="main">
      <section className="lead page__section">
        <MainTitle title="Куда пойти" />
        <Filter
          array={tags}
          selectRubric={selectRubric}
        />
      </section>
      <MainMentor
        title={places.results[0].title}
        address={places.results[0].address}
        imageUrl={places.results[0].imageUrl}
        link={places.results[0].link}
        info={places.results[0].info}
        description={places.results[0].description}
      />
      <PlacesCards places={places.results} />
    </div>
  );
}

Places.propTypes = {
  selectRubric: PropTypes.func.isRequired,
};

export default Places;
