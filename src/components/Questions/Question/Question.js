/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import './Question.scss';

export default function Question({ question, activeRubrics }) {
  function showAnswer(event) {
    const questionElement = event.target.closest('.question');
    const questionShowButton = questionElement.querySelector('.question__show-button');
    const questionAnswer = questionElement.querySelector('.question__answer');

    questionShowButton.classList.toggle('question__show-button_active');
    questionAnswer.classList.toggle('question__answer_visible');
  }

  return (
    <article className={`question ${activeRubrics.length > 0 && question.tag.every((tag) => activeRubrics.indexOf(tag) === -1) ? 'display_none' : ''}`}>
      <h2 onClick={showAnswer} className="section-title question__title">{question.question}</h2>
      <div className="question__wrap">
        {
          question.tag.map((tag, i) => <p key={i.toString()} className="rubric question__rubric">{tag}</p>)
        }
        <button onClick={showAnswer} className="question__show-button" type="button" aria-label="Показать ответ" title="Показать ответ" />
      </div>
      <div className="question__answer">
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
