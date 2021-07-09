/* eslint-disable no-console */
import React from 'react';
import ReactPaginate from 'react-paginate';
import Tag from './Tag/Tag';
import BookCard from './BookCard/BookCard';
import Preloader from '../Preloader/Preloader';

import api from '../../utils/Api';
import { toggleTag } from '../../utils/utils';

import './Books.scss';

const requestDelay = 1000;
const filterDelay = 2000;

const breakpoints = {
  desktopHigh: 1920,
  desktopLow: 1440,
  mobileHigh: 1024,
  mobileLow: 320,
};

const limitDesktopHighRes = 16;
const limitDesktopLowRes = 12;
const limitMobile = 2;

function getLimit() {
  const currentWidth = document.documentElement.clientWidth;
  let limit;

  if (currentWidth > breakpoints.desktopLow) {
    limit = limitDesktopHighRes;
  } else if (currentWidth <= breakpoints.desktopLow && currentWidth > breakpoints.mobileHigh) {
    limit = limitDesktopLowRes;
  } else {
    limit = limitMobile;
  }

  return limit;
}

export default function Books() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [tags, setTags] = React.useState([]);
  const [books, setBooks] = React.useState([]);
  const cardCount = React.useRef(0);
  const bookContainer = React.useRef(null);
  const paginationTimer = React.useRef(null);
  const selectedTags = React.useRef([]);
  const currentPage = React.useRef(0);

  function onPageChange(page, delay = requestDelay) {
    clearTimeout(paginationTimer.current);
    setIsLoading(true);

    const params = new URLSearchParams({ limit: getLimit(), offset: getLimit() * page.selected });
    selectedTags.current.forEach((item) => {
      params.append('tag', item.slug);
    });

    paginationTimer.current = setTimeout(() => {
      api.getBooks(params)
        .then((resBooks) => {
          setBooks(resBooks.results);
          cardCount.current = resBooks.count;
          currentPage.current = page.selected;
        })
        .catch((err) => console.log('Ошибка загрузки данных: ', err))
        .finally(() => setIsLoading(false));
    }, delay);
  }

  function onTagClick(tag) {
    selectedTags.current = toggleTag(tag, selectedTags.current);
    onPageChange({ selected: 0 }, filterDelay);
  }

  React.useEffect(() => {
    Promise.all([
      api.getBookTags(),
      api.getBooks(new URLSearchParams({ limit: getLimit() })),
    ])
      .then(([resTags, resBooks]) => {
        setTags([{
          id: 0,
          name: 'Все',
          slug: 'all',
        }, ...resTags.results]);
        setBooks(resBooks.results);
        cardCount.current = resBooks.count;
      })
      .catch((err) => console.log('Ошибка загрузки данных: ', err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Книги</h1>
        <div className="tags">
          <ul className="tags__list">
            {
              tags.map((tag) => <Tag key={tag.id} tag={tag} onTagClick={onTagClick} />)
            }
          </ul>
        </div>
      </section>

      <section ref={bookContainer} className="cards-grid cards-grid_content_small-cards page__section">
        {
          isLoading && <div className="books-preloader"><Preloader /></div>
        }
        {
          books.map((book) => <BookCard key={book.id} book={book} />)
        }
      </section>

      <section className="pagination page__section">
        <nav className="pagination__nav" aria-label="Навигация по страницам">
          <ReactPaginate
            initialPage={0}
            onPageChange={onPageChange}
            pageCount={Math.ceil(cardCount.current / getLimit())}
            forcePage={currentPage.current}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            breakClassName="pagination__list-item section-title"
            breakLinkClassName="pagination__link"
            containerClassName="pagination__list"
            activeClassName="pagination__link_active"
            pageClassName="pagination__list-item section-title"
            pageLinkClassName="pagination__link"
            previousClassName="pagination__list-item"
            previousLinkClassName="pagination__arrow-left"
            nextClassName="pagination__list-item"
            nextLinkClassName="pagination__arrow-right"
            disabledClassName="pagination__arrow_disabled"
            previousLabel=""
            nextLabel=""
          />
        </nav>
      </section>
    </main>
  );
}
