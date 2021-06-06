/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

export default function FilmCard({ film }) {
  return (
    <article className="card-container card-pagination">
      <div className="card card_content_video">
        <div className="video">
          <img src={film.image} alt="Превью видео" className="video__img" />
          <ul className="video__rubric-list">
            {
              film.tags.map((tag) => <li key={tag.id}><p className="rubric video__rubric">{tag.name}</p></li>)
            }
          </ul>
        </div>
        <div className="card__video-info">
          <div className="card__title-wrap">
            <h2 className="section-title card__title">{film.title}</h2>
            <p className="caption card__title-caption">
              {film.director}, {film.country}, {film.year} год
            </p>
          </div>
          <a href={film.trailer} className="link card__link link_action_open-video">смотреть трейлер</a>
        </div>
      </div>
      <div className="card card_content_annotation">
        <div className="card__content">
          <div className="card__annotation">
            {
              film.annotation.map((p, i) => <p key={i.toString()} className="paragraph card__paragraph">{p}</p>)
            }
          </div>
        </div>
      </div>
    </article>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      slug: PropTypes.string,
    })),
    title: PropTypes.string,
    director: PropTypes.string,
    country: PropTypes.string,
    year: PropTypes.string,
    trailer: PropTypes.string,
    annotation: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
