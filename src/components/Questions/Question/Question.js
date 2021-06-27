/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Question.module.scss';

export default function Question({ question, activeRubrics }) {
  function showAnswer(event) {
    const questionElement = event.target.closest(`.${styles.question}`);
    const questionShowButton = questionElement.querySelector(`.${styles['question__show-button']}`);
    const questionAnswer = questionElement.querySelector(`.${styles.question__answer}`);

    questionShowButton.classList.toggle(styles['question__show-button_active']);
    questionAnswer.classList.toggle(styles.question__answer_visible);
  }

  return (
    <article className={`${styles.question}${activeRubrics.length > 0 && question.tag.every((tag) => activeRubrics.indexOf(tag) === -1) ? ' display_none' : ''}`}>
      <h2 onClick={showAnswer} className={`${styles['section-title']} ${styles.question__title}`}>{question.question}</h2>
      <div className={styles.question__wrap}>
        {
          question.tag.map((tag, i) => <p key={i.toString()} className={`${styles.rubric} ${styles.question__rubric}`}>{tag}</p>)
        }
        <button onClick={showAnswer} className={styles['question__show-button']} type="button" aria-label="Показать ответ" title="Показать ответ" />
      </div>
      <div className={styles.question__answer}>
        {
          question.answer
        }
      </div>
    </article>
  );
}

Question.defaultProps = {
  activeRubrics: [],
};

Question.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string),
  question: PropTypes.shape({
    id: PropTypes.number,
    tag: PropTypes.arrayOf(PropTypes.string),
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
};
