/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

export default function Question({ title, rubric, answer }) {
  function showAnswer(event) {
    const question = event.target.closest('.question');
    const questionShowButton = question.querySelector('.question__show-button');
    const questionAnswer = question.querySelector('.question__answer');

    questionShowButton.classList.toggle('question__show-button_active');
    questionAnswer.classList.toggle('question__answer_visible');
  }

  return (
    <article className="question">
      <h2 onClick={showAnswer} className="section-title question__title">{title}</h2>
      <div className="question__wrap">
        <p className="rubric question__rubric">{rubric}</p>
        <button onClick={showAnswer} className="question__show-button" type="button" aria-label="Показать ответ" title="Показать ответ" />
      </div>
      <div className="question__answer">
        {
          answer.map((paragraph, i) => <p key={((n) => n + 1)(i)} className="paragraph question__paragraph">{paragraph}</p>)
        }
      </div>
    </article>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  rubric: PropTypes.string.isRequired,
  answer: PropTypes.arrayOf(String).isRequired,
};
