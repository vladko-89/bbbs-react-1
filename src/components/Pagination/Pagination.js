import React from 'react';
import PropTypes from 'prop-types';
import { cardsPerPage } from '../../utils/Constants';
// work in progress not functional
function Pagination({ cards }) {
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  // eslint-disable-next-line no-console
  console.log('totalPages', totalPages);
  return (
    <section className="pagination page__section">
      <nav className="pagination__nav" aria-label="Навигация по страницам">
        <ul className="pagination__list">
          <li className="pagination__list-item section-title"><button type="button" className="pagination__link pagination__link_active">1</button></li>
          <li className="pagination__list-item section-title"><button type="button" className="pagination__link">2</button></li>
          <li className="pagination__list-item section-title"><button type="button" className="pagination__link">3</button></li>
          <li className="pagination__list-item section-title"><button type="button" className="pagination__link">4</button></li>
          <li className="pagination__list-item section-title"><button type="button" className="pagination__link">5</button></li>
          <li className="pagination__list-item section-title">...</li>
          <li className="pagination__list-item section-title"><button type="button" className="pagination__link">18</button></li>
        </ul>
        <button aria-label="next-page" type="button" className="pagination__arrow" />
      </nav>
    </section>
  );
}

Pagination.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Pagination;
