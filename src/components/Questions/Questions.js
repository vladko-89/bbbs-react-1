import React from 'react';
import Question from './Question/Question';

import questions from '../../utils/questionsData';

export default function Questions() {
  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Ответы на вопросы</h1>
        <div className="tags tags_content_long-list">
          <ul className="tags__list tags__list_type_long">
            <li className="tags__list-item">
              <button className="button tags__button tags__button_active" type="button">Все</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Первая встреча</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Вопросы детей</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Воспитатели / опекуны</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Сомнения</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Сложности</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Подарки</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Влияние на ребенка</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Времяпровождение</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Ответственность</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Завершение отношений</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Первая встреча</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Вопросы детей</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Первая встреча</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Вопросы детей</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Воспитатели / опекуны</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Сомнения</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Сложности</button>
            </li>
          </ul>
        </div>
      </section>

      <section className="questions page__section">
        {
          // eslint-disable-next-line react/jsx-props-no-spreading
          questions.map((question) => <Question key={question.id} {...question} />)
        }
      </section>
    </main>
  );
}
