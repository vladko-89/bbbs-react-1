import React from 'react';
import PropTypes from 'prop-types';
import styles from './RightArticle.module.scss';
import api from '../../utils/Api';

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
      <div className={`${styles.article__wrapper} ${styles.article__wrapper_reverse} card_color_${color}`} />
      <section className={`${styles.article}`}>
        <div className={`${styles.article__wrapper} card_color_${color}`}>
          <h1 className={`chapter-title ${styles['article__main-title']}`}>{content.title}</h1>
          <p className={`section-title ${styles.article__description}`}>{content.description}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: card.text }} />
      </section>
    </main>
  );
}

RightArticle.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    form: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, slug: PropTypes.string })),
  }).isRequired,
};

export default RightArticle;
