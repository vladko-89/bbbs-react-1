import React from 'react';
import PropTypes from 'prop-types';
import './GuideArticle.scss';

export default function GuideArticle({ card }) {
  return (
    <main className="main">
      <section className="article page__section">
        <h1 className="chapter-title article__main-title">{card.title}</h1>
        <p className="section-title article__description">
          {card.description}
        </p>
        <figure className="article__figure">
          <img
            src={card.imageUrl}
            alt={card.title}
            className="article__image"
          />
          <figcaption className="caption article__figcaption">
            {card.imageCaption}
          </figcaption>
        </figure>

        { /* eslint-disable-next-line react/no-danger */}
        <div className="article_" dangerouslySetInnerHTML={{ __html: card.text }} />

      </section>
    </main>
  );
}
GuideArticle.propTypes = {
  card: PropTypes.shape(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};
