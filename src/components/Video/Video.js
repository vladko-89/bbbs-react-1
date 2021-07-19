import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import MainVideo from '../MainVideo/MainVideo';
import MainVideoPreview from '../MainVideoPreview/MainVideoPreview';
import Pagination from '../Pagination/Pagination';
import Preloader from '../Preloader/Preloader';
import { cardsPerPage } from '../../utils/constants';
import { onLinkNav } from '../../utils/utils';

import api from '../../utils/Api';

function Video({
  activeRubrics,
  selectRubric,
}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [mainVideo, setMainVideo] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [tags, setTags] = React.useState([]);

  function onPageChange(page) {
    const offset = page !== 1 ? page * cardsPerPage - cardsPerPage : 0;
    api
      .getVideos({
        limit: cardsPerPage,
        offset,
        tags: activeRubrics,
      })
      .then((res) => setMovies(res));
    onLinkNav();
  }

  React.useEffect(() => {
    Promise.all([api.getMain(),
      api.getVideosTags(),
      api.getVideos({
        limit: cardsPerPage,
        offset: 0,
        tags: activeRubrics,
      })])
      .then(([resMain,
        resTags,
        resVideos]) => {
        setMainVideo(resMain.video);
        setTags([
          {
            id: 0,
            name: 'Все',
            slug: 'all',
          },
          ...resTags.results,
        ]);
        // console.log('videos:', resVideos);
        setMovies(resVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    api
      .getVideos({
        limit: cardsPerPage,
        tags: activeRubrics,
      })
      .then((res) => setMovies(res));
  }, [activeRubrics]);

  React.useEffect(() => {
    selectRubric('All', true);
  }, []);

  return isLoading ? <Preloader /> : (
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
        {movies.results.map((movie) => (
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
      {(movies.count > cardsPerPage) && (
      <Pagination
        cardsLength={movies.count}
        onPageChange={onPageChange}
        cardsPerPage={cardsPerPage}
      />
      )}
    </main>

  );
}

Video.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
};

export default Video;
