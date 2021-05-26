import React from 'react';

import './QuestionForm.scss';

export default function QuestionForm() {
  const [question, setQuestion] = React.useState('');

  function onInput(event) {
    document.forms['add-question'].submit.disabled = event.target.value.length < 1;
    setQuestion(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();

    const submitButton = event.target.submit;
    submitButton.disabled = true;
    event.target.reset();
    // eslint-disable-next-line no-console
    console.log(question);
  }

  return (
    <section className="add-question page__section">
      <h2 className="section-title add-question__title">Если вы не нашли ответ на свой вопрос — напишите нам, и мы включим его в список</h2>
      <form onSubmit={onSubmit} className="question-form" name="add-question">
        <fieldset className="question-form__add-question">
          <input onInput={onInput} className="question-form__input" type="text" name="question" placeholder="Введите вопрос" required />
          <button className="button button_theme_light question-form__button" type="submit" name="submit" disabled>Отправить</button>
        </fieldset>
      </form>
    </section>
  );
}
