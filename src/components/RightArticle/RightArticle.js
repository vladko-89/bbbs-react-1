import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import './RightArticle.scss';
import api from '../../utils/Api';
import arrow from '../../images/svg/arrow-right-blue.svg';
import Preloader from '../Preloader/Preloader';

function RightArticle() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [content, setContent] = React.useState({});
  const [isNext, setIsNext] = React.useState(true);
  const { id } = useParams();
  // console.log(setIsNext);

  React.useEffect(() => {
    setIsLoading(true);
    Promise.all([api.getRightArticle(id), api.getRightArticle(parseInt(id, 10) + 1)])
      .then(([resArticle, resNext]) => {
        setContent(resArticle);
        if (resNext !== 404) { setIsNext(true); } else { setIsNext(false); }
      }).catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [id]);
  return isLoading ? <Preloader /> : (
    <main className="main">
      <div className={`article__wrapper article__wrapper_reverse card_color_${content.color}`} />
      <section className="articles">
        <div className={`article__wrapper card_color_${content.color}`}>
          <h1 className="chapter-title article__main-title">{content.title}</h1>
          <p className="section-title article__description">{content.description}</p>
        </div>
        { /* eslint-disable-next-line react/no-danger */}
        <div className="articles" dangerouslySetInnerHTML={{ __html: content.text }} />
        <div className="container">
          <div className="next-page">
            <div className="next-page__img" />
            {isNext && (
            <Link to={`/rights/${parseInt(id, 10) + 1}`} className="next-page__link" target="_self">
              <h2 className="section-title next-page__title">Следующая статья</h2>
              <img src={arrow} alt="Стрелка" className="next-page__arrow-icon" />
            </Link>
            ) }

          </div>
        </div>
      </section>
    </main>
  );
}

RightArticle.propTypes = {
  card: PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.number,
    color: PropTypes.string,
    title: PropTypes.string,
    form: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, slug: PropTypes.string })),
  }).isRequired,
};

export default RightArticle;
