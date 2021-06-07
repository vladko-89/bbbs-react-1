import React from 'react';
import Tag from './Tag/Tag';
import BookCard from './BookCard/BookCard';
import Pagination from '../Pagination/Pagination';

import { books, tags } from '../../utils/booksData';
import { filterByTags, toggleTagId } from '../../utils/utils';

export default function Books() {
  const cardsPerPage = 12;
  const [tagIdArray, setTagIdArray] = React.useState([]);
  const [filteredBooks, setFilteredBooks] = React.useState(books);
  const [shownBooks, setShownBooks] = React.useState([]);

  function onPageChange(currPage) {
    const begin = currPage * cardsPerPage - cardsPerPage;
    const end = begin + cardsPerPage;
    setShownBooks(
      filteredBooks.slice(begin, end < filteredBooks.length ? end : filteredBooks.length),
    );
  }

  function handleTagClick(tagId) {
    setTagIdArray(toggleTagId(tagId, tagIdArray));
  }

  React.useEffect(() => {
    setFilteredBooks(filterByTags(tagIdArray, books));
  }, [tagIdArray]);

  React.useEffect(() => {
    onPageChange(1);
  }, [filteredBooks]);

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
          shownBooks.map((book) => <BookCard key={book.id} book={book} />)
        }
      </section>

      <Pagination
        cardsLength={filteredBooks.length}
        onPageChange={onPageChange}
        cardsPerPage={cardsPerPage}
      />
    </main>
  );
}
