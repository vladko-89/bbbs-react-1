import React from 'react';
import { Link } from 'react-router-dom';
import { number, shape, string } from 'prop-types';

import linkImage from './next-article.png';
import linkArrow from '../../../../images/svg/arrow-right.svg';

import './NextArticleLink.scss';

export default function NextArticleLink({ nextArticle = null }) {
  return (
    <div className="next-article-link__next-page">
      <img
        src={nextArticle.imageUrl}
        alt="Особенности социально дезадаптивных детей"
        className="next-article-link__next-page__img"
      />
      <Link to={`${nextArticle.id}`} className="next-article-link__next-page__link">
        <h2 className="next-article-link__section-title next-article-link__next-page__title">
          {nextArticle.title}
        </h2>
        <img
          src={linkArrow}
          alt="Стрелка"
          className="next-article-link__next-page__arrow-icon"
        />
      </Link>
    </div>
  );
}

NextArticleLink.defaultProps = {
  nextArticle: shape({
    id: null,
    title: '',
    imageUrl: linkImage,
  }),
};

NextArticleLink.propTypes = {
  nextArticle: shape({
    id: number,
    title: string,
    imageUrl: string,
  }),
};
