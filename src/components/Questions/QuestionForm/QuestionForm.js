import React from 'react';
import api from '../../../utils/Api';

import './QuestionForm.scss';

export default function QuestionForm() {
  const [question, setQuestion] = React.useState('');
  const messageElement = React.useRef(null);
  const submitButton = React.useRef(null);

  function onInput(event) {
    if (messageElement.current.textContent) messageElement.current.textContent = '';
    submitButton.current.disabled = event.target.value.length < 1;
    setQuestion(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    submitButton.current.disabled = true;

    api.sendQuestion(question)
      .then(() => {
        event.target.reset();
        messageElement.current.classList.remove('question-form__message_denied');
        messageElement.current.classList.add('question-form__message_success');
        messageElement.current.textContent = 'Спасибо! Мы приняли ваш вопрос.';
      })
      .catch(() => {
        messageElement.current.classList.remove('question-form__message_success');
        messageElement.current.classList.add('question-form__message_denied');
        messageElement.current.textContent = 'Что-то пошло не так ...';
        submitButton.current.disabled = false;
      });
  }

  return (
    <section className="add-question page__section">
      <h2 className="section-title add-question__title">Если вы не нашли ответ на свой вопрос — напишите нам, и мы включим его в список</h2>
      <form onSubmit={onSubmit} className="question-form" name="add-question">
        <fieldset className="question-form__add-question">
          <input onInput={onInput} className="question-form__input" type="text" name="question" placeholder="Введите вопрос" required />
          <button ref={submitButton} className="button button_theme_light question-form__button" type="submit" name="submit" disabled>Отправить</button>
        </fieldset>
      </form>
      <p ref={messageElement} className="question-form__message" />
    </section>
  );
}
