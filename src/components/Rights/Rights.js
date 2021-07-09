import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import RightsCard from '../RightsCard/RightsCard';
import Preloader from '../Preloader/Preloader';
import api from '../../utils/Api';
import { formingCards } from '../../utils/utils';
import { figures, colors } from '../../utils/Constants';

function Rights({
  activeRubrics,
  selectRubric,
  clickOnCard,
}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [tags, setTags] = React.useState([]);
  const [rights, setRights] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getRightsTags(), api.getRights()])
      .then(([resTags, resRights]) => {
        setTags([
          {
            id: 0,
            name: 'Все',
            slug: 'all',
          },
          ...resTags.results,
        ]);
        console.log(resRights.results);
        const result = formingCards(resRights.results, figures, colors);
        setRights(result);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    api
      .getRights(activeRubrics)
      .then((res) => {
        const result = formingCards(res.results, figures, colors);
        setRights(result);
      })
      .catch((err) => console.log(err));
  }, [activeRubrics]);

  return isLoading ? (
    <Preloader />
  ) : (
    <main className="main">
      <section className="lead page__section">
        <MainTitle title="Права детей" />
        <Filter
          array={tags}
        // eslint-disable-next-line no-console
          selectRubric={selectRubric}
        />
        <section className="rights page__section">
          <div className="rights__line rights__line_stage_first" />
          <div className="rights__line rights__line_stage_second" />
          <div className="rights__line rights__line_stage_third" />
          {rights.map((card) => (
            <RightsCard
              key={card.id}
              activeRubrics={activeRubrics}
              clickOnCard={clickOnCard}
              card={card}
            />
          ))}
        </section>
      </section>
    </main>
  );
}

Rights.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
  clickOnCard: PropTypes.func.isRequired,
};

export default Rights;
