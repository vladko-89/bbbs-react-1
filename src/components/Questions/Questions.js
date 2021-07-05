import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Tag from './Tag/Tag';
import Question from './Question/Question';
import QuestionForm from './QuestionForm/QuestionForm';
import Preloader from '../Preloader/Preloader';

import api from '../../utils/Api';
import { toggleTagId } from '../../utils/utils';

import styles from './Questions.module.scss';

export default function Questions({ loggedIn }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [tags, setTags] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [tagIdArray, setTagIdArray] = React.useState([]);

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

  React.useEffect(() => {
  }, [tagIdArray]);

  function handleTagClick(tagId) {
    setTagIdArray(toggleTagId(tagId, tagIdArray));
  }

  try {
    return isLoading ? (<Preloader />) : (
      <main className={styles.main}>
        <section className={`${styles.lead} ${styles.page__section}`}>
          <MainTitle title="Ответы на вопросы" />
          <div className={`${styles.tags} ${styles['tags_content_long-list']}`}>
            <ul className={`${styles.tags__list} ${styles.tags__list_type_long}`}>
              {
                tags.map((tag) => (
                  <Tag key={tag.id} tag={tag} handleTagClick={handleTagClick} />
                ))
              }
            </ul>
          </div>
        </section>
        <section className={`${styles.questions} ${styles.page__section}`}>
          {
            questions.map((question) => (
              <Question key={question.id} question={question} />
            ))
          }
        </section>
        {
          loggedIn && <QuestionForm />
        }
      </main>
    );
  } catch (error) {
    return (
      <main className={styles.main}>
        <section className={`${styles.lead} ${styles.page__section}`}>
          <MainTitle title="Ответы на вопросы" />
        </section>
      </main>
    );
  }
}

Questions.defaultProps = {
  loggedIn: false,
};

Questions.propTypes = {
  loggedIn: PropTypes.bool,
};
