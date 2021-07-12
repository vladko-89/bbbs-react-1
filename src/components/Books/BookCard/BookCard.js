import React from 'react';
import PropTypes from 'prop-types';

import './BookCard.scss';

export default function BookCard({ book }) {
  return (
    <article className="card-container card-pagination">
      <div className="card card_content_book">
        <div className="book" style={{ backgroundColor: book.color }}>
          <h2 className="section-title book__title">{book.title}</h2>
          <div className="book__info">
            <p className="caption book__author">{book.author}</p>
            <p className="caption book__year">{book.year}</p>
          </div>
        </div>
      </div>
      <div className="card card_content_annotation">
        <div className="card__content">
          <div className="card__annotation">
            <p className="paragraph card__paragraph">{book.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      slug: PropTypes.string,
    })),
    title: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.number,
    description: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};
