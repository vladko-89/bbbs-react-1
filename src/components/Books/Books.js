import React from 'react';
import Tag from './Tag/Tag';
import BookCard from './BookCard/BookCard';
// import Pagination from '../Pagination/Pagination';
import Preloader from '../Preloader/Preloader';

import { toggleTagId } from '../../utils/utils';

import api from '../../utils/Api';

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
  // const [shownBooks, setShownBooks] = React.useState([]);

  // function onPageChange(currPage) {
  //   const begin = currPage * cardsPerPage - cardsPerPage;
  //   const end = begin + cardsPerPage;
  //   setShownBooks(
  //     filteredBooks.slice(begin, end < filteredBooks.length ? end : filteredBooks.length),
  //   );
  // }

  function handleTagClick(tagId) {
    setTags(toggleTagId(tagId, tags));
  }

  // React.useEffect(() => {
  //   setFilteredBooks(filterByTags(tagIdArray, books));
  // }, [tagIdArray]);

  // React.useEffect(() => {
  //   onPageChange(1);
  // }, [filteredBooks]);

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
              tags.map((tag) => <Tag key={tag.id} tag={tag} handleTagClick={handleTagClick} />)
            }
          </ul>
        </div>
      </section>

      <section className="cards-grid cards-grid_content_small-cards page__section">
        {
          isLoading ? <Preloader /> : books.map((book) => <BookCard key={book.id} book={book} />)
        }
      </section>

      {/* <Pagination
        cardsLength={filteredBooks.length}
        onPageChange={onPageChange}
        cardsPerPage={cardsPerPage}
      /> */}
    </main>
  );
}
