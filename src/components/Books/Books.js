/* eslint-disable no-unused-vars */
import React from 'react';
import Tag from './Tag/Tag';
import BookCard from './BookCard/BookCard';
import Preloader from '../Preloader/Preloader';
import Pagination from '../Pagination/Pagination';

import api from '../../utils/Api';

import './Books.scss';

// const requestDelay = 2000;

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

  // function handleTagClick(tagId) {
  //   setTags(toggleTagId(tagId, tags));
  // }

  function onPageChange(page) {
    setIsLoading(true);

    setTimeout(() => {
      api.getBooks(new URLSearchParams({ limit: getLimit(), offset: getLimit() * (page - 1) }))
        .then((resBooks) => setBooks(resBooks.results))
        .catch((err) => console.log('Ошибка загрузки данных: ', err))
        .finally(() => setIsLoading(false));
    }, 2000);
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
      .finally(() => {
        setIsLoading(false);
        // bookContainer.current.style.height = `${bookContainer.current.clientHeight}px`;
      });
  }, []);

  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Книги</h1>
        <div className="tags">
          <ul className="tags__list">
            {
              tags.map((tag) => <Tag key={tag.id} tag={tag} handleTagClick={() => {}} />)
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

      <Pagination
        cardsLength={cardCount.current}
        onPageChange={onPageChange}
        cardsPerPage={getLimit()}
        disableInitialCallback
      />
    </main>
  );
}
