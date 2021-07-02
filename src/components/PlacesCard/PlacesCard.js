import React from 'react';
import PropTypes from 'prop-types';
import MentorChoice from '../MentorChoice/MentorChoice';
import CardCaption from '../CardCaption/CardCaption';

function PlacesCard({
  color,
  chosen,
  title,
  description,
  address,
  info,
  link,
}) {
  return (
    <article className="card-container card-container_type_article">
      <div className={`card card_color_${color}`}>
        {chosen && <MentorChoice />}
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{title}</h2>
          <p className="caption card__title-caption">{address}</p>
        </div>
        <a href={link} className="link card__link">
          перейти на сайт
        </a>
      </div>

      <div className="card card_content_annotation">
        <div className="card__content">
          {info && <CardCaption textCaption={info} />}
          <div className="card__annotation">
            <p className="paragraph card__paragraph">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

PlacesCard.defaultProps = {
  info: '',
};

PlacesCard.propTypes = {
  color: PropTypes.string.isRequired,
  chosen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  info: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default PlacesCard;
