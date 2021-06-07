import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

function Pagination({ cardsLength, onPageChange, cardsPerPage }) {
  const totalPages = Math.ceil(cardsLength / cardsPerPage);

  if (totalPages > 1) {
    return (
      <section className={`${styles.pagination} ${styles.page__section}`}>
        <nav className={`${styles.pagination__nav}`} aria-label="Навигация по страницам">
          <ReactPaginate
            previousLabel=""
            nextLabel=""
            breakLabel="..."
            breakClassName={`${styles['pagination__list-item']} ${styles['section-title']}`}
            breakLinkClassName={styles.pagination__link}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={(page) => onPageChange(page.selected + 1)}
            containerClassName={styles.pagination__list}
            activeClassName={styles.pagination__link_active}
            pageClassName={`${styles['pagination__list-item']} ${styles['section-title']}`}
            pageLinkClassName={styles.pagination__link}
            initialPage={0}
            previousClassName={styles['pagination__list-item']}
            previousLinkClassName={styles['pagination__arrow-left']}
            nextClassName={styles['pagination__list-item']}
            nextLinkClassName={styles['pagination__arrow-right']}
            disabledClassName={styles.pagination__arrow_disabled}
          />
        </nav>
      </section>
    );
  }
  return (
    <section className="pagination page__section" />
  );
}

Pagination.propTypes = {
  cardsLength: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  cardsPerPage: PropTypes.number.isRequired,
};
export default Pagination;
