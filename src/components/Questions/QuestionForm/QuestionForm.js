import React from 'react';
import api from '../../../utils/Api';

import styles from './QuestionForm.module.scss';

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
        messageElement.current.classList.remove(styles['question-form__message_denied']);
        messageElement.current.classList.add(styles['question-form__message_success']);
        messageElement.current.textContent = 'Спасибо! Мы приняли ваш вопрос.';
      })
      .catch((err) => {
        messageElement.current.classList.remove(styles['question-form__message_success']);
        messageElement.current.classList.add(styles['question-form__message_denied']);
        // eslint-disable-next-line prefer-destructuring
        messageElement.current.textContent = err.details.question[0]; // temp hardcode
        submitButton.current.disabled = false;
      });
  }

  return (
    <section className={`${styles['add-question']} ${styles.page__section}`}>
      <h2 className={`${styles['section-title']} ${styles['add-question__title']}`}>Если вы не нашли ответ на свой вопрос — напишите нам, и мы включим его в список</h2>
      <form onSubmit={onSubmit} className={styles['question-form']} name="add-question">
        <fieldset className={styles['question-form__add-question']}>
          <input onInput={onInput} className={styles['question-form__input']} type="text" name="question" placeholder="Введите вопрос" required />
          <button ref={submitButton} className={`${styles.button} ${styles.button_theme_light} ${styles['question-form__button']}`} type="submit" name="submit" disabled>Отправить</button>
        </fieldset>
      </form>
      <p ref={messageElement} className={styles['question-form__message']} />
    </section>
  );
}
