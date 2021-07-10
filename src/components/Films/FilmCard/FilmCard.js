/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes, { arrayOf, number, string } from 'prop-types';

import './FilmCard.scss';

export default function FilmCard({ film }) {
  try {
    return (
      <article className="card-container card-pagination">
        <div className="card card_content_video">
          <div className="video filmcard__preview">
            <img src={`https://picsum.photos/300/200/?${film.id}`} alt="Превью видео" className="video__img" />
            <ul className="video__rubric-list">
              {
                film.tags.map((tag) => <li key={tag}><p className="rubric video__rubric">{tag}</p></li>)
              }
            </ul>
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">{film.title}</h2>
              <p className="caption card__title-caption">
                {film.info}
              </p>
            </div>
            <a href={film.link} className="link card__link link_action_open-video">смотреть трейлер</a>
          </div>
        </div>
        <div className="card card_content_annotation">
          <div className="card__content">
            <div className="card__annotation">
              <p className="paragraph card__paragraph">{film.description}</p>
            </div>
          </div>
        </div>
      </article>
    );
  } catch (error) {
    console.log('Ошибка рендера карточки фильма: ', error.message);

    return (
      <article className="card-container card-pagination">
        <div className="card card_content_video">
          <div className="video">
            <img src="" alt="Превью видео" className="video__img" />
            <ul className="video__rubric-list" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Название фильма</h2>
              <p className="caption card__title-caption">Информация о фильме</p>
            </div>
            <a href={film.link} className="link card__link link_action_open-video">смотреть трейлер</a>
          </div>
        </div>
        <div className="card card_content_annotation">
          <div className="card__content">
            <div className="card__annotation" />
          </div>
        </div>
      </article>
    );
  }
}

FilmCard.defaultProps = {
  film: PropTypes.shape({
    id: null,
    title: 'Нет названия',
    preview: '',
    info: 'Отсутствует информация о фильме',
    description: 'Нет описания',
    link: '',
    duration: '0:0:0',
    tags: [],
  }),
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: number,
    title: string,
    preview: string,
    info: string,
    description: string,
    link: string,
    duration: string,
    tags: arrayOf(number),
  }),
};
