import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import CatalogCard, { shapes } from './CatalogCard/CatalogCard';

import './Catalog.scss';

import cards from '../../utils/catalogData';

export default function Catalog() {
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
          cards.map((card, i) => (
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

      <section className="pagination page__section">
        <nav className="pagination__nav" aria-label="Навигация по страницам">
          <ul className="pagination__list">
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link pagination__link_active">1</a></li>
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link">2</a></li>
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link">3</a></li>
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link">4</a></li>
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link">5</a></li>
            <li className="pagination__list-item section-title">...</li>
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link">18</a></li>
          </ul>
          <img src="./images/svg/arrow-right-grey.svg" alt="стрелка вправо" className="pagination__arrow" />
        </nav>
      </section>
    </main>
  );
}
