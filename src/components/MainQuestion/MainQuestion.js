import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MainQuestion.module.scss';

function MainQuestion({ question, tag }) {
  return (
    <article className={`${styles.question} ${styles['main-questions__item']}`}>
      <Link to="/questions" className={`${styles['main-questions__link']}`}>
        <h2 className={`${styles['section-title']} ${styles.question__title} ${styles['main-questions__title']}`}>{question}</h2>
      </Link>
      <div className={styles['main-questions__rubric-contaier']}>
        {tag.map((t, idx) => (<p key={idx.toString()} className={`${styles.rubric} ${styles.question__rubric} ${styles['main-questions__rubric']}`}>{t.name}</p>))}
      </div>
    </article>
  );
}

MainQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  tag: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainQuestion;
