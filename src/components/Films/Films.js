import React from 'react';
import FilmCard from './FilmCard/FilmCard';
import Pagination from '../Pagination/Pagination';

import { films } from '../../utils/filmsData';

export default function Films() {
  const cardsPerPage = 16;
  const [shownCards, setShownCards] = React.useState([]);

  function onPageChange(currPage) {
    const begin = currPage * cardsPerPage - cardsPerPage;
    const end = begin + cardsPerPage;
    setShownCards(films.slice(begin, end < films.length ? end : films.length));
  }

  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Фильмы</h1>
        <div className="tags">
          <ul className="tags__list">
            <li className="tags__list-item">
              <button className="button tags__button tags__button_active" type="button">Все</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Документальный</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Драма</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Приключение</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Комедия</button>
            </li>
          </ul>
        </div>
      </section>

      <section className="cards-grid cards-grid_content_small-cards page__section">
        {
          shownCards.map((film) => <FilmCard key={film.id} film={film} />)
        }
      </section>

      <Pagination
        cardsLength={films.length}
        onPageChange={onPageChange}
        cardsPerPage={cardsPerPage}
      />
    </main>
  );
}
