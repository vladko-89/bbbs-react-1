/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import MainArticle from './MainArticle/MainArticle';
import ArticleCard from './ArticleCard/ArticleCard';

import { mainArticle as leadArticle, articleCards as cards } from '../../utils/articlesData';

import './Articles.scss';

export default function Articles({ mainArticle, articleCards }) {
  return (
    <main className="main">
      <section className="lead page__section">
        <MainTitle title="Статьи" />
      </section>

      <section className="main-card page__section">
        <MainArticle {...mainArticle} />
      </section>

      <section className="cards-grid page__section">
        {
          articleCards.map((card, i) => <ArticleCard key={i.toString()} {...card} />)
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

Articles.defaultProps = {
  mainArticle: leadArticle,
  articleCards: cards,
};

Articles.propTypes = {
  mainArticle: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    annotation: PropTypes.arrayOf(PropTypes.string),
  }),

  articleCards: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    link: PropTypes.string,
    annotation: PropTypes.arrayOf(PropTypes.string),
  })),
};
