/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import MainArticle from './MainArticle/MainArticle';
import ArticleCard from './ArticleCard/ArticleCard';
import Pagination from '../Pagination/Pagination';

import { mainArticle as leadArticle, articleCards as cards } from '../../utils/articlesData';
import { cardsPerPage } from '../../utils/Constants';

import './Articles.scss';

export default function Articles({ mainArticle, articleCards }) {
  const [shownCards, setShownCards] = React.useState([]);

  function onPageChange(currPage) {
    const begin = currPage * cardsPerPage - cardsPerPage;
    const end = begin + cardsPerPage;
    setShownCards(cards.slice(begin, end < cards.length ? end : cards.length));
  }

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
          shownCards.map((card, i) => <ArticleCard key={i.toString()} {...card} />)
        }
      </section>

      <Pagination cards={articleCards} onPageChange={onPageChange} />
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
