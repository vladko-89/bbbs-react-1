import React from 'react';
import PropTypes from 'prop-types';
import styles from './RightArticle.module.scss';
import api from '../../utils/Api';

function RightArticle(card) {
  const [isLoad, setIsLoad] = React.useState(false);
  const [content, setContent] = React.useState({});

  function getContentArticle() {
    setIsLoad(true);
    console.log('RA', card.card);
    api.getRightArticle(card.card.id)
      .then((res) => setContent(res))
      .catch((error) => console.log(error))
      .finally(() => console.log(content, isLoad));
  }

  React.useEffect(() => {
    getContentArticle();
  }, [setContent]);
  return (
    <main className="main">
      <section className={`${styles.article} page__section`}>
        <h1 className={`chapter-title ${styles['article__main-title']}`}>Психологические особенности детей-сирот</h1>
        <p className={`section-title ${styles.article__description}`}>Развитие детей-сирот отличается от развития детей, живущих в семьях. Все  этапы развития у детей-сирот проходят с искажениями и имеют ряд негативных  особенностей: замедленный темп психического развития, низкий уровень  интеллектуального развития, позднее формирование навыков саморегуляции и правил  поведения, бедную эмоциональную сферу и воображение.</p>
        <figure className={`${styles.article__figure}`}>
          <img src="./images/article/main-image.jpg" alt="Психологические особенности детей-сирот" className={`${styles.article__image}`} />
          <figcaption className={`caption ${styles.article__figcaption}`}>Возможно подпись к фотографии. Автор фото.</figcaption>
        </figure>

        <div className={`${styles.article__container}`}>
          <h2 className={`section-title ${styles.article__subtitle}`}>Отрицательный образ себя</h2>
          <p className={`${styles.paragraph}`}>У таких детей возникает ощущение отверженности. Оно приводит к напряженности и  недоверию к людям и, как итог, к реальному неприятию себя и окружающих. В ходе дальнейших взаимоотношений с окружающими негативное отношение к себе  усиливается. Причиной формирования отрицательного образа себя, является также и  недостаток безусловной любви, т. е. любви не за что-то, а просто, потому что он,  ребенок, есть. И домашний ребенок может быть заброшен на няню, а в старшем  возрасте безнадзорен.</p>

          <h2 className={`section-title ${styles.article__subtitle}`}>Особенности психофизического развития и эмоциональной сферы детей-сирот</h2>
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

          <h2 className={`section-title ${styles.article__subtitle}`}>Младший школьный возраст</h2>
          <p className={`${styles.paragraph}`}>Для воспитанников младшего школьного возраста характерны ярко выраженные  мотивы, непосредственно связанные с их повседневной деятельностью в детском доме:  выполнением режима проживания в детском доме, правил поведения в детском доме и  в школе, тогда как у семейных детей этой возрастной группы мотивы их деятельности  и общения значительно богаче и разнообразнее. Такая ограниченность и бедность  мотивационной сферы связаны с условиями проживания детей в детском доме и их  недостаточно полным общением со взрослыми.</p>

          <h2 className={`section-title ${styles.article__subtitle}`}>Заголовок в одну строку</h2>
          <div className={`card card_color_yellow ${styles.article__card}`}>
            <p className={`${styles.paragraph}`}>Для воспитанников младшего школьного возраста характерны ярко выраженные  мотивы, непосредственно связанные с их повседневной деятельностью в детском доме:  выполнением режима проживания в детском доме, правил поведения в детском доме и  в школе, тогда как у семейных детей этой возрастной группы мотивы их деятельности  и общения значительно богаче и разнообразнее. Такая ограниченность и бедность  мотивационной сферы связаны с условиями проживания детей в детском доме и их  недостаточно полным общением со взрослыми.</p>
          </div>

          <div className={`${styles['next-page']}`}>
            <img src="./images/article/small-image.jpg" alt="Особенности социально дезадаптивных детей" className={`${styles['next-page__img']}`} />
            <a href="#" className={`${styles['next-page__link']}`} target="_self">
              <h2 className={`section-title ${styles['next-page__title']}`}>Особенности социально дезадаптивных детей</h2>
              <img src="./images/svg/arrow-right.svg" alt="Стрелка" className={`${styles['next-page__arrow-icon']}`} />
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
