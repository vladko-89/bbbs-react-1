import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import RightsCard from '../RightsCard/RightsCard';
import Preloader from '../Preloader/Preloader';
// eslint-disable-next-line import/no-named-as-default-member
import Pagination from '../Pagination/Pagination';
import api from '../../utils/Api';
import { formingCards, splitOnBlocks } from '../../utils/utils';
import { figures, colors, RIGHTS_PER_PAGE } from '../../utils/constants';

function Rights({
  activeRubrics,
  selectRubric,
  onClickCard,
}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [tags, setTags] = React.useState([]);
  const [rights, setRights] = React.useState([]);
  const [cardsInBlock, setCardsInBlock] = React.useState(4);
  const blocks = splitOnBlocks(rights.results, cardsInBlock);

  function onPageChange(page) {
    const offset = page !== 1 ? page * RIGHTS_PER_PAGE - RIGHTS_PER_PAGE : 0;
    api
      .getRights({
        limit: RIGHTS_PER_PAGE,
        offset,
        tags: activeRubrics,
      })
      .then((res) => {
        const result = formingCards(res.results, figures, colors);
        setRights({ ...res, results: result });
      });
  }

  React.useEffect(() => {
    function checkRes() {
      switch (true) {
        case (window.innerWidth < 1200 && window.innerWidth >= 768): {
          setCardsInBlock(3); break;
        }
        case (window.innerWidth < 768): {
          setCardsInBlock(1); break;
        }
        default: {
          setCardsInBlock(4);
          break;
        }
      }
    }
    checkRes();
    window.addEventListener('resize', checkRes);
    return () => window.removeEventListener('resize', checkRes);
  }, []);

  React.useEffect(() => {
    Promise.all([api.getRightsTags(),
      api.getRights({ limit: RIGHTS_PER_PAGE, tags: activeRubrics })])
      .then(([resTags, resRights]) => {
        setTags([
          {
            id: 0,
            name: 'Все',
            slug: 'all',
          },
          ...resTags.results,
        ]);
        // console.log(resRights);
        const result = formingCards(resRights.results, figures, colors);
        setRights({ ...resRights, results: result });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    api
      .getRights({ limit: RIGHTS_PER_PAGE, tags: activeRubrics })
      .then((res) => {
        const result = formingCards(res.results, figures, colors);
        setRights({ ...res, results: result });
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
        <section className="page__section">
          {blocks.map((block) => (
            <>
              <div className="rights">
                {block.map((card) => (
                  <RightsCard
                    key={card.id}
                    activeRubrics={activeRubrics}
                    onClickCard={onClickCard}
                    card={card}
                  />
                ))}
              </div>
              <div className="rights__divider " />
            </>
          )) }
        </section>
        {(rights.count > RIGHTS_PER_PAGE) && (
        <Pagination
          cardsLength={rights.count}
          cardsPerPage={RIGHTS_PER_PAGE}
          onPageChange={onPageChange}
        />
        ) }
      </section>
    </main>
  );
}

Rights.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
  onClickCard: PropTypes.func.isRequired,
};

export default Rights;
