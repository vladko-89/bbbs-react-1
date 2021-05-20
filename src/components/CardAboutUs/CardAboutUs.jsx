import React from 'react';

function CardAboutUs(props) {
  return (
    <article className="card-container about__card-container">
      <div className={`card card_color_${props.color} about__card`}>
        <h2 className="section-title">{props.title}</h2>
      </div>
      <div className="card card_content_annotation">
        <div className="card__content about__card-content">
          {props.children}
        </div>
        <a href="https://yandex.ru"
          rel="noreferrer"
          target="_blank"
          className="link card__link about__card-link">
          {props.linkText}
        </a>
      </div>
    </article>
  );
}

export default CardAboutUs;