import React from 'react';
import PropTypes from 'prop-types';

function MainVideoPreview({
  link, imageUrl, tags, title, info,
}) {
  return (
    <article className="card card_content_video card-pagination_page_main">
      <div className="video">
        <a href={link} className="card__link-wrap">
          <img src={imageUrl} alt="Превью видео" className="video__img" />
          <ul className="video__rubric-list">
            {tags.map((rubric) => (
              <li key={rubric.id}>
                <p
                  className="rubric video__rubric"
                >
                  {rubric.name}
                </p>
              </li>
            ))}

          </ul>
        </a>
      </div>
      <div className="card__video-info">
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{title}</h2>
          <p className="caption card__title-caption">{info}</p>
        </div>
        <a href={link} className="link card__link link_action_open-video">смотреть трейлер</a>
      </div>
    </article>
  );
}
MainVideoPreview.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainVideoPreview;
