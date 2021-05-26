import React from 'react';

import './QuestionForm.scss';

export default function QuestionForm() {
  return (
    <section className="add-question page__section">
      <h2 className="section-title add-question__title">Если вы не нашли ответ на свой вопрос — напишите нам, и мы включим его в список</h2>
      <form className="question-form" name="add-question">
        <fieldset className="question-form__add-question">
          <input className="question-form__input" type="text" name="question" value="" placeholder="Введите вопрос" required />
          <button className="button button_theme_light question-form__button" type="submit" name="submit" disabled>Отправить</button>
        </fieldset>
      </form>
    </section>
  );
}
