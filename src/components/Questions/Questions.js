import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import TagList from './TagList/TagList';
import Question from './Question/Question';
import QuestionForm from './QuestionForm/QuestionForm';

import { questions } from '../../utils/questionsData';

export default function Questions({ loggedIn, activeRubrics, selectRubric }) {
  return (
    <main className="main">
      <section className="lead page__section">
        <MainTitle title="Ответы на вопросы" />
        <TagList selectRubric={selectRubric} />
      </section>
      <section className="questions page__section">
        {
          questions.map((question) => (
            <Question
              key={question.id}
              question={question}
              activeRubrics={activeRubrics}
            />
          ))
        }
      </section>
      {
        loggedIn && <QuestionForm />
      }
    </main>
  );
}

Questions.defaultProps = {
  loggedIn: false,
};

Questions.propTypes = {
  loggedIn: PropTypes.bool,
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
};
