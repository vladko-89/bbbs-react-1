import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import CatalogCard, { shapes } from './CatalogCard/CatalogCard';
import Pagination from '../Pagination/Pagination';

import './Catalog.scss';

import cards from '../../utils/catalogData';

export default function Catalog() {
  const cardsPerPage = 16;
  const [shownCards, setShownCards] = React.useState([]);
  function onPageChange(currPage) {
    const begin = currPage * cardsPerPage - cardsPerPage;
    const end = begin + cardsPerPage;
    setShownCards(cards.slice(begin, end < cards.length ? end : cards.length));
  }

  return (
    <main className="main">
      <section className="lead page__section">
        <MainTitle title="Справочник" />
        <p className="section-title lead__text">Памятка новичка&nbsp;&mdash; наши метариалы, где сможете найти всю базовую информацию, рассказанную на вводном тренинге. Если вы захотите освежить свои знания, и&nbsp;напомнить себе о&nbsp;чем-то.</p>
      </section>

      <section className="rights page__section">
        <div className="rights__line rights__line_stage_first" />
        <div className="rights__line rights__line_stage_second" />
        <div className="rights__line rights__line_stage_third" />

        {
          shownCards.map((card, i) => (
            <CatalogCard
              key={i.toString()}
              shape={shapes[Math.floor(Math.random() * 3)]}
              title={card.title}
              image={card.image}
              path={card.path}
            />
          ))
        }
      </section>

      <Pagination
        cardsLength={cards.length}
        onPageChange={onPageChange}
        cardsPerPage={cardsPerPage}
      />
    </main>
  );
}
