import React from 'react';
import PropTypes from 'prop-types';
import styles from './RightArticle.module.scss';
import api from '../../utils/Api';
import arrow from '../../images/svg/arrow-right.svg';
import circle from '../../images/article/small-image.jpg';

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
        <div className={`${styles.article__container} `}>
          <h2 className={`section-title ${styles.article__subtitle}`}>{content.heading1}</h2>
          <p className={`${styles.paragraph}`}>{content.text1}</p>

          <h2 className={`section-title ${styles.article__subtitle}`}>{content.heading2}</h2>
          <ul className={`card ${styles.article__card}`}>
            <li className={`${styles['article__card-list-item']}`}>
              <p className={`${styles.paragraph}`}>замедленное развитие познавательной деятельности (мало интересуются  окружающим миром).</p>
            </li>
            <li className={`${styles['article__card-list-item']}`}>
              <p className={`${styles.paragraph}`}>эмоциональная бедность.</p>
            </li>
            <li className={`${styles['article__card-list-item']}`}>
              <p className={`${styles.paragraph}`}>отсутствует интерес к оценке взрослого.</p>
            </li>
            <li className={`${styles['article__card-list-item']}`}>
              <p className={`${styles.paragraph}`}>отсутствует переживание неуспеха в деятельности. Нет потребности в  положительной оценке взрослых и сверстников.</p>
            </li>
            <li className={`${styles['article__card-list-item']}`}>
              <p className={`${styles.paragraph}`}>не умеют дифференцировать успешное и неуспешное действие.</p>
            </li>
            <li className={`${styles['article__card-list-item']}`}>
              <p className={`${styles.paragraph}`}>отставание в развитии речи.</p>
            </li>
            <li className={`${styles['article__card-list-item']}`}>
              <p className={`${styles.paragraph}`}>нарушения самоидентичности.</p>
            </li>
            <li className={`${styles['article__card-list-item']}`}>
              <p className={`${styles.paragraph}`}>интеллектуальное развитие характеризуется дисгармоничностью,  несбалансированностью видов мышления. Предметное и наглядное мышление у  детей-сирот является главным: что видят, о том и думают.</p>
            </li>
            <li className={`${styles['article__card-list-item']}`}>
              <p className={`${styles.paragraph}`}>вербальное (словесное) мышление достигает возрастной нормы к 6-и годам, а  невербальное значительно отстает и формируется уже в школьном возрасте.</p>
            </li>
          </ul>

          <h2 className={`section-title ${styles.article__subtitle}`}>{content.heading3}</h2>
          <p className={`${styles.paragraph}`}>{content.text2}</p>

          <h2 className={`section-title ${styles.article__subtitle}`}>{content.heading4}</h2>
          <div className={`card card_color_${color} ${styles.article__card}`}>
            <p className={`${styles.paragraph}`}>{content.text3}</p>
          </div>

          <div className={`${styles['next-page']}`}>
            <img src={circle} alt="Особенности социально дезадаптивных детей" className={`${styles['next-page__img']}`} />
            <a href="#" className={`${styles['next-page__link']}`} target="_self">
              <h2 className={`section-title ${styles['next-page__title']}`}>{content.heading5}</h2>
              <img src={arrow} alt="Стрелка" className={`${styles['next-page__arrow-icon']}`} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

RightArticle.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    title: PropTypes.string,
    form: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, slug: PropTypes.string })),
  }).isRequired,
};

export default RightArticle;
