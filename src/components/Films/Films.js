import React from 'react';
import Tag from './Tag/Tag';
import FilmCard from './FilmCard/FilmCard';
import Pagination from '../Pagination/Pagination';

import { films, filmTags } from '../../utils/filmsData';

export default function Films() {
  const cardsPerPage = 16;
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

  function filterByTags(tags, data) {
    return (!tags.length)
      ? data
      : data.filter(
        (item) => item.tags.some((itemTag) => tags.some((tagId) => tagId === itemTag.id)),
      );
  }

  function toggleTagId(tagId) {
    if (tagId === 0) {
      setTagIdArray([]);
    } else {
      const index = tagIdArray.findIndex((tag) => tag === tagId);
      if (index >= 0) {
        setTagIdArray(tagIdArray.filter((tag) => tag !== tagId));
      } else {
        setTagIdArray([...tagIdArray, tagId]);
      }
    }
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
              filmTags.map((tag) => <Tag key={tag.id} tag={tag} toggleTag={toggleTagId} />)
            }
          </ul>
        </div>
      </section>

      <section className="cards-grid cards-grid_content_small-cards page__section">
        {
          shownCards.map((film, i) => <FilmCard key={i.toString()} film={film} />)
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
