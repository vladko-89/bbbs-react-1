import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import GuideCard, { shapes } from '../GuideCard/GuideCard';
import Preloader from '../Preloader/Preloader';
import Pagination from '../Pagination/Pagination';
import { splitOnBlocks } from '../../utils/utils';
import { GUIDES_PER_PAGE } from '../../utils/Constants';
import api from '../../utils/Api';
import './Guides.scss';

export default function Guides({ clickOnCard }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [guides, setGuides] = React.useState([]);
  const [cardsInBlock, setCardsInBlock] = React.useState(4);
  const blocks = splitOnBlocks(guides.results, cardsInBlock);

  function onPageChange(page) {
    const offset = page !== 1 ? page * GUIDES_PER_PAGE - GUIDES_PER_PAGE : 0;
    api
      .getGuides({
        limit: GUIDES_PER_PAGE,
        offset,
      })
      .then((res) => {
        setGuides(res);
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
    api.getGuides({ limit: GUIDES_PER_PAGE })
      .then((res) => {
        console.log(res);
        setGuides(res);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return isLoading ? (
    <Preloader />
  ) : (
    <main className="main">
      <section className="lead page__section">
        <MainTitle title="Справочник" />
        <p className="section-title lead__text">Памятка новичка&nbsp;&mdash; наши материалы, где сможете найти всю базовую информацию, рассказанную на вводном тренинге. Если вы захотите освежить свои знания, и&nbsp;напомнить себе о&nbsp;чем-то.</p>

        <section className="page__section">
          {blocks.map((block) => (
            <>
              <div className="rights">
                {block.map((card) => (
                  <GuideCard
                    key={card.id}
                    shape={shapes[Math.floor(Math.random() * 3)]}
                    title={card.title}
                    image={card.imageUrl}
                    clickOnCard={clickOnCard}
                    card={card}
                    id={card.id}
                  />
                ))}
              </div>
              <div className="rights__divider " />
            </>
          )) }
        </section>

        {(guides.count > GUIDES_PER_PAGE) && (
        <Pagination
          cardsLength={guides.count}
          onPageChange={onPageChange}
          cardsPerPage={GUIDES_PER_PAGE}
        />
        )}
      </section>
    </main>
  );
}
Guides.propTypes = {
  clickOnCard: PropTypes.func.isRequired,
};
