/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { bool, number, string } from 'prop-types';
import defaultImage from '../../../images/where-to-go/img-xl.jpg';

import './MainArticle.scss';

const defaultMain = {
  id: null,
  isMain: false,
  title: 'Заголовок не указан',
  author: 'Автор не указан',
  profession: '',
  text: 'Нет текста статьи.',
  color: '#f8d162',
  imageUrl: defaultImage,
};

export default function MainArticle({ mainArticle = defaultMain }) {
  return (
    <article className="card-container card-container_type_main-article">
      <div className="card card_type_main" style={{ backgroundColor: mainArticle.color || defaultMain.color }}>
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{mainArticle.title || defaultMain.title}</h2>
          <p className="caption card__title-caption">{mainArticle.author || defaultMain.author}, {mainArticle.profession || defaultMain.profession}</p>
        </div>
        <img src={mainArticle.imageUrl || defaultMain.imageUrl} alt="Картинка основной статьи" className="card__img card__img_position_main-article" />
        <Link to="/article" className="link card__link">читать на сайте</Link>
      </div>
      <div className="card card_content_annotation card_type_main">
        <div className="card__content">
          <div className="card__annotation card__annotation_position_main-card card__annotation_type_main-article">
            <p className="paragraph card__paragraph main-article__text">{mainArticle.text || defaultMain.text}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

MainArticle.defaultProps = {
  mainArticle: PropTypes.shape(defaultMain),
};

MainArticle.propTypes = {
  mainArticle: PropTypes.shape({
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
