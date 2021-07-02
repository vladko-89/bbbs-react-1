/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Question.module.scss';

export default function Question({ question }) {
  const questionButton = React.useRef(null);
  const questionAnswer = React.useRef(null);

  function showAnswer() {
    questionButton.current.classList.toggle(styles['question__show-button_active']);
    questionAnswer.current.classList.toggle(styles.question__answer_visible);
  }

  return (
    <article className={`${styles.question}`}>
      <h2 onClick={showAnswer} className={`${styles['section-title']} ${styles.question__title}`}>{question.question}</h2>
      <div className={styles.question__wrap}>
        {
          question.tags.map((tag) => <p key={tag.id} className={`${styles.rubric} ${styles.question__rubric}`}>{tag.name}</p>)
        }
        <button ref={questionButton} onClick={showAnswer} className={styles['question__show-button']} type="button" aria-label="Показать ответ" title="Показать ответ" />
      </div>
      <div ref={questionAnswer} className={styles.question__answer}>
        {
          question.answer
        }
      </div>
    </article>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      slug: PropTypes.string,
    })),
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
};
