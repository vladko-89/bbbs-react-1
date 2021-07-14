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
  const [mainVideo, setMainVideo] = React.useState({});
  const [moviesLoad, setMoviesLoad] = React.useState([]);
  const [moviesToShow, setMoviesToShow] = React.useState([]);
  const [isDataReady, setIsDataReady] = React.useState(false);
  const [tags, setTags] = React.useState([]);
  const currentIndex = React.useRef(0);

  React.useEffect(() => {
    Promise.all([api.getMain(), api.getVideosTags(), api.getVideos()])
      .then(([resMain, resTags, resVideos]) => {
        setMainVideo(resMain.video);
        setTags([
          {
            id: 0,
            name: 'Все',
            slug: 'all',
          },
          ...resTags.results,
        ]);
        console.log('videos:', resVideos);
        setMoviesLoad(resVideos.results);
        setMoviesToShow(resVideos.results);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => setIsDataReady(true));
  }, []);

  React.useEffect(() => {
    api
      .getVideos(activeRubrics)
      .then((res) => {
        setMoviesToShow(res.result.slice(currentIndex.current, cardsPerPage));
      })
      .catch((err) => console.log(err));
  }, [activeRubrics]);

  React.useEffect(() => {
    selectRubric('All', true);
  }, []);

  function onPageChange(page) {
    if (page !== 1) {
      currentIndex.current = page * cardsPerPage - cardsPerPage;
    } else {
      currentIndex.current = 0;
    }
    setMoviesToShow(moviesToShow.slice(currentIndex.current, page * cardsPerPage));
  }

  if (isDataReady) {
    return (
      <main className="main">
        <section className="lead page__section">
          <MainTitle title="Видео" />
          <Filter array={tags} selectRubric={selectRubric} />
        </section>
        <section className="main-card page__section">
          <MainVideo
            title={mainVideo.title}
            info={mainVideo.info}
            link={mainVideo.link}
            imageUrl={mainVideo.imageUrl}
            duration={mainVideo.duration}
            tags={mainVideo.tags}
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
          cardsLength={moviesLoad.length}
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
