import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import MainVideo from '../MainVideo/MainVideo';
import MainVideoPreview from '../MainVideoPreview/MainVideoPreview';
import Pagination from '../Pagination/Pagination';
import Preloader from '../Preloader/Preloader';
import { cardsPerPage } from '../../utils/constants';

import api from '../../utils/Api';

function Video({
  activeRubrics,
  selectRubric,
}) {
  const [mainState, setMainState] = React.useState({});
  const [moviesToShow, setMoviesToShow] = React.useState([]);
  const [isDataReady, setIsDataReady] = React.useState(false);
  const currentIndex = React.useRef(0);
  const filterArray = [
    {
      name: 'Все',
      slug: 'All',
    },
    {
      name: 'Ресурсная группа',
      slug: 'Ресурсная группа',
    },
    {
      name: 'Эксперт',
      slug: 'Эксперт',
    },
    {
      name: 'Пары',
      slug: 'Пары',
    },
    {
      name: 'События',
      slug: 'События',
    },
    {
      name: 'Медиа о нас',
      slug: 'Медиа о нас',
    },
  ];

  React.useEffect(() => {
    selectRubric('All', true);
  }, []);

  React.useEffect(() => {
    api.getMain().then((res) => {
      setMainState(res);
      setMoviesToShow(res.movies.slice(currentIndex.current, cardsPerPage));
    })
      .then(() => setIsDataReady(true))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [setMainState]);

  function onPageChange(page) {
    if (page !== 1) {
      currentIndex.current = page * cardsPerPage - cardsPerPage;
    } else {
      currentIndex.current = 0;
    }
    setMoviesToShow(mainState.movies.slice(currentIndex.current, page * cardsPerPage));
  }

  if (isDataReady) {
    return (
      <main className="main">
        <section className="lead page__section">
          <MainTitle title="Видео" />
          <Filter array={filterArray} selectRubric={selectRubric} />
        </section>
        <section className="main-card page__section">
          <MainVideo
            title={mainState.video.title}
            info={mainState.video.info}
            link={mainState.video.link}
            imageUrl={mainState.video.imageUrl}
            duration={mainState.video.duration}
            tags={mainState.video.tags}
            activeRubrics={activeRubrics}
          />
        </section>
        <section className="main-section page__section cards-grid cards-grid_content_small-cards">
          {moviesToShow.map((movie) => (
            <MainVideoPreview
              link={movie.link}
              key={movie.id}
              title={movie.title}
              imageUrl={movie.imageUrl}
              caption={movie.caption}
              info={movie.info}
              tags={movie.tags}
              activeRubrics={activeRubrics}
            />
          ))}
        </section>
        <Pagination
          cardsLength={mainState.movies.length}
          onPageChange={onPageChange}
          cardsPerPage={cardsPerPage}
        />
      </main>

    );
  }
  return (
    <Preloader />
  );
}

Video.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
};

export default Video;
