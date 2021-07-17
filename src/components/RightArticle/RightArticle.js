import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './RightArticle.scss';
import api from '../../utils/Api';
import arrow from '../../images/svg/arrow-right-blue.svg';

function RightArticle({ card }) {
  const [isLoad, setIsLoad] = React.useState(false);
  const [content, setContent] = React.useState({});
  // eslint-disable-next-line react/destructuring-assignment
  const { color } = card;
  function getContentArticle() {
    setIsLoad(true);
    console.log('RA', card);
    api.getRightArticle(card.id)
      .then((res) => setContent(res))
      .catch((error) => console.log(error))
      .finally(() => console.log(content, color, isLoad));
  }

  React.useEffect(() => {
    getContentArticle();
  }, [setContent]);
  return (
    <main className="main">
      <div className={`article__wrapper article__wrapper_reverse card_color_${color}`} />
      <section className="articles">
        <div className={`article__wrapper card_color_${color}`}>
          <h1 className="chapter-title article__main-title">{content.title}</h1>
          <p className="section-title article__description">{content.description}</p>
        </div>
        <div className="articles" dangerouslySetInnerHTML={{ __html: card.text }} />
        <div className="container">
          <div className="next-page">
            <div className="next-page__img" />
            <Link to={`/rights/${card.id + 1}`} className="next-page__link" target="_self">
              <h2 className="section-title next-page__title">Следующая статья</h2>
              <img src={arrow} alt="Стрелка" className="next-page__arrow-icon" />
            </Link>
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
