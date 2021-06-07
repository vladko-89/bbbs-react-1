import React from 'react';
import BookCard, { colors } from './BookCard/BookCard';

import { books } from '../../utils/booksData';

export default function Books() {
  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Книги</h1>
        <div className="tags">
          <ul className="tags__list">
            <li className="tags__list-item">
              <button className="button tags__button tags__button_active" type="button">Все</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Научные</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Художественные</button>
            </li>
          </ul>
        </div>
      </section>

      <section className="cards-grid cards-grid_content_small-cards page__section">
        {
          books.map(
            // eslint-disable-next-line max-len
            (book) => <BookCard key={book.id} book={book} color={colors[Math.floor(Math.random() * colors.length)]} />,
          )
        }
      </section>

      <section className="pagination page__section">
        <nav className="pagination__nav" aria-label="Навигация по страницам">
          <ul className="pagination__list">
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link pagination__link_active">1</a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">2</a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">3</a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">4</a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">5</a>
            </li>
            <li className="pagination__list-item section-title">...</li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">18</a>
            </li>
          </ul>
          <img
            src="../images/svg/arrow-right-grey.svg"
            alt="стрелка вправо"
            className="pagination__arrow"
          />
        </nav>
      </section>
    </main>
  );
}
