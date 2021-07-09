import React from 'react';
import Tag from './Tag/Tag';
import FilmCard from './FilmCard/FilmCard';
import Pagination from '../Pagination/Pagination';

import { films, filmTags } from '../../utils/filmsData';
import { filterByTags, toggleTagId } from '../../utils/utils';

export default function Films() {
  const cardsPerPage = 1;
  const [tagIdArray, setTagIdArray] = React.useState([]);
  const [filteredFilms, setFilteredFilms] = React.useState(films);
  const [shownCards, setShownCards] = React.useState([]);

  function onPageChange(currPage) {
    const begin = currPage * cardsPerPage - cardsPerPage;
    const end = begin + cardsPerPage;
    setShownCards(
      filteredFilms.slice(begin, end < filteredFilms.length ? end : filteredFilms.length),
    );
  }

  function handleTagClick(tagId) {
    setTagIdArray(toggleTagId(tagId, tagIdArray));
  }

  React.useEffect(() => {
    setFilteredFilms(filterByTags(tagIdArray, films));
  }, [tagIdArray]);

  React.useEffect(() => {
    onPageChange(1);
  }, [filteredFilms]);

  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Фильмы</h1>
        <div className="tags">
          <ul className="tags__list">
            {
              filmTags.map((tag) => <Tag key={tag.id} tag={tag} handleTagClick={handleTagClick} />)
            }
          </ul>
        </div>
      </section>

      <section className="cards-grid cards-grid_content_small-cards page__section">
        {
          // eslint-disable-next-line max-len
          shownCards.map((film, i) => <FilmCard key={i.toString()} film={film} isAnnotation="true" />)
        }
      </section>

      <Pagination
        cardsLength={filteredFilms.length}
        onPageChange={onPageChange}
        cardsPerPage={cardsPerPage}
      />
    </main>
  );
}
