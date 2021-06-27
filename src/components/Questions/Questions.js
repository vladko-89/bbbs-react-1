import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Tag from './Tag/Tag';
import Question from './Question/Question';
import QuestionForm from './QuestionForm/QuestionForm';
import Preloader from '../Preloader/Preloader';

import api from '../../utils/Api';

import styles from './Questions.module.scss';

export default function Questions({ loggedIn, activeRubrics, selectRubric }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [tags, setTags] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);

  const [activeFilter, setActiveFilter] = React.useState('');

  function onFilterChange(tag) {
    setActiveFilter(tag);
  }

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
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (<Preloader />) : (
    <main className={styles.main}>
      <section className={`${styles.lead} ${styles.page__section}`}>
        <MainTitle title="Ответы на вопросы" />
        <div className={`${styles.tags} ${styles['tags_content_long-list']}`}>
          <ul className={`${styles.tags__list} ${styles.tags__list_type_long}`}>
            {
              tags.map((tag, i) => (
                <Tag
                  key={tag.id}
                  isActive={i === 0}
                  name={tag.name}
                  selectRubric={selectRubric}
                  onFilterChange={onFilterChange}
                  activeFilter={activeFilter}
                />
              ))
            }
          </ul>
        </div>
      </section>
      <section className={`${styles.questions} ${styles.page__section}`}>
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
