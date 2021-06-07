import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import { FilterArrayFirst, cards } from '../../utils/RightsData';
import Filter from '../Filter/Filter';
import RightsCard from '../RightsCard/RightsCard';
import Pagination from '../Pagination/Pagination';
import { cardsPerPage } from '../../utils/Constants';

function Rights({
  activeRubrics,
  selectRubric,
}) {
  const currentIndex = React.useRef(0);
  const [cardsToShow, setCardsToShow] = React.useState([]);
  React.useEffect(() => {
    selectRubric('All', true);
  }, []);

  function onPageChange(page) {
    if (page !== 1) {
      currentIndex.current = page * cardsPerPage - cardsPerPage;
    } else {
      currentIndex.current = 0;
    }
    setCardsToShow(cards.slice(currentIndex.current, page * cardsPerPage));
  }

  return (
    <main className="main">
      <section className="lead page__section">
        <MainTitle title="Права детей" />
        <Filter
          array={FilterArrayFirst}
        // eslint-disable-next-line no-console
          selectRubric={selectRubric}
        />
        <section className="rights page__section">
          <div className="rights__line rights__line_stage_first" />
          <div className="rights__line rights__line_stage_second" />
          <div className="rights__line rights__line_stage_third" />
          {cardsToShow.map((card) => (
            <RightsCard
              key={card.id}
              activeRubrics={activeRubrics}
              card={card}
            />
          ))}
        </section>
        <Pagination
          cardsLength={cards.length}
          onPageChange={onPageChange}
          cardsPerPage={cardsPerPage}
        />
      </section>
    </main>
  );
}

Rights.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
};

export default Rights;
