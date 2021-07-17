import React from 'react';
import PropTypes from 'prop-types';

function CardAboutUs(
  {
    link,
    color,
    title,
    children,
    linkText,
  },
) {
  return (
    <article className="card-container about__card-container">
      <div className={`card card_color_${color} about__card`}>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="card card_content_annotation">
        <div className="card__content about__card-content">
          {children}
        </div>
        <a
          href={link}
          rel="noreferrer"
          target="_blank"
          className="link card__link about__card-link"
        >
          {linkText}
        </a>
      </div>
    </article>
  );
}

CardAboutUs.propTypes = {
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default CardAboutUs;
