import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

function Pagination({ cardsLength, onPageChange, cardsPerPage }) {
  const totalPages = Math.ceil(cardsLength / cardsPerPage);
  return (
    <section className="pagination page__section">
      <nav className="pagination__nav" aria-label="Навигация по страницам">
        <ReactPaginate
          previousLabel=""
          nextLabel=""
          breakLabel="..."
          breakClassName="pagination__list-item section-title"
          breakLinkClassName="pagination__link"
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          onPageChange={(page) => onPageChange(page.selected + 1)}
          containerClassName="pagination__list"
          activeClassName="pagination__link_active"
          pageClassName="pagination__list-item section-title"
          pageLinkClassName="pagination__link"
          initialPage={0}
          previousClassName="pagination__list-item"
          previousLinkClassName="pagination__arrow-left"
          nextClassName="pagination__list-item"
          nextLinkClassName="pagination__arrow-right"
          disabledClassName="pagination__arrow_disabled"
        />
      </nav>
    </section>
  );
}

Pagination.propTypes = {
  cardsLength: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  cardsPerPage: PropTypes.number.isRequired,
};
export default Pagination;
