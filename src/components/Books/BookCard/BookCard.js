import React from 'react';
import PropTypes from 'prop-types';

import './BookCard.scss';

export const colors = [
  'blue', 'pink',
];

export default function BookCard({ book, color }) {
  return (
    <article className="card-container card-pagination">
      <div className="card card_content_book">
        <div className={`book book_color_${color}`}>
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
            {
              book.annotation.map((p, i) => <p key={i.toString()} className="paragraph card__paragraph">{p}</p>)
            }
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
    annotation: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  color: PropTypes.string.isRequired,
};
