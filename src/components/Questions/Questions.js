import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import TagList from './TagList/TagList';
import Question from './Question/Question';
import QuestionForm from './QuestionForm/QuestionForm';
import Preloader from '../Preloader/Preloader';

import api from '../../utils/Api';

export default function Questions({ loggedIn, activeRubrics, selectRubric }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [tags, setTags] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getQuestionsTags(),
      api.getQuestions(),
    ])
      .then(([resTags, resQuestions]) => {
        setTags([{
          id: 0,
          name: 'Все',
          slug: 'all',
        }, ...resTags.results]);
        setQuestions(resQuestions.results);
        console.dir(resQuestions);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (<Preloader />) : (
    <main className="main">
      <section className="lead page__section">
        <MainTitle title="Ответы на вопросы" />
        <TagList tags={tags} selectRubric={selectRubric} />
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
