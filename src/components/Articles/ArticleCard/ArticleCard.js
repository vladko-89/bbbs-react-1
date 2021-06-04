import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const colors = [
  'green',
  'yellow',
  'pink',
  'blue',
];

export default function ArticleCard({
  color, title, author, link, annotation,
}) {
  return (
    <article className="card-container card-container_type_article">
      <div className={`card card_color_${color}`}>
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{title}</h2>
          <p className="caption card__title-caption">{author}</p>
        </div>
        <Link to={link} className="link card__link">читать на сайте</Link>
      </div>
      <div className="card card_content_annotation">
        <div className="card__content">
          <div className="card__annotation">
            {
              annotation.map((paragraph, i) => <p key={i.toString()} className="paragraph card__paragraph">{paragraph}</p>)
            }
          </div>
        </div>
      </div>
    </article>
  );
}

ArticleCard.defaultProps = {
  color: colors[0],
  title: 'Нет заголовка',
  author: 'Автор не указан',
  link: '/article',
  annotation: [],
};

ArticleCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  link: PropTypes.string,
  annotation: PropTypes.arrayOf(PropTypes.string),
};
