/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes, { bool, number, string } from 'prop-types';

import './ArticleCard.scss';

export default function ArticleCard({ article }) {
  const { url } = useRouteMatch();

  return (
    <article className="card-container card-container_type_article article-card__container">
      <div className="card" style={{ backgroundColor: article.color }}>
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{article.title}</h2>
          <p className="caption card__title-caption">{article.author}, {article.profession}</p>
        </div>
        <Link to={`${url}/${article.id}`} className="link card__link">читать на сайте</Link>
      </div>
      <div className="card card_content_annotation">
        <div className="card__content">
          <div className="card__annotation">
            <p className="paragraph card__paragraph article-card__text">{article.text}</p>
            {/* <p className="paragraph card__paragraph article-card__text" dangerouslySetInnerHTML={{ __html: article.text }} /> */}
          </div>
        </div>
      </div>
    </article>
  );
}

ArticleCard.defaultProps = {
  article: PropTypes.shape({
    id: null,
    isMain: false,
    title: 'Заголовок не указан',
    author: 'Автор не указан',
    profession: '',
    text: 'Нет текста статьи.',
    color: 'Snow',
    imageUrl: '',
  }),
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: number,
    isMain: bool,
    title: string,
    author: string,
    profession: string,
    text: string,
    color: string,
    imageUrl: string,
  }),
};
