import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import TagList from './TagList/TagList';
import Question from './Question/Question';

import { questions } from '../../utils/questionsData';

export default function Questions() {
  return (
    <main className="main">
      <section className="lead page__section">
        <MainTitle title="Ответы на вопросы" />
        <TagList />
      </section>
      <section className="questions page__section">
        {
          questions.map((question) => <Question key={question.id} question={question} />)
        }
      </section>
    </main>
  );
}
