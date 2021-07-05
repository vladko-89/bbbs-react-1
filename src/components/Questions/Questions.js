import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Tag from './Tag/Tag';
import Question from './Question/Question';
import QuestionForm from './QuestionForm/QuestionForm';
import Preloader from '../Preloader/Preloader';

import api from '../../utils/Api';
import { toggleTag } from '../../utils/utils';

import styles from './Questions.module.scss';

const requestDelay = 2000;
const limit = 4;

export default function Questions({ loggedIn }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [tags, setTags] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const selectedTags = React.useRef([]);
  const requestTimer = React.useRef(null);
  const [nextLink, setNextLink] = React.useState(null);

  function handleTagClick(tag) {
    clearTimeout(requestTimer.current);
    setIsLoading(true);
    setNextLink(null);

    selectedTags.current = toggleTag(tag, selectedTags.current);

    const searchParams = new URLSearchParams();
    selectedTags.current.forEach((item) => {
      searchParams.append('tag', item.slug);
    });
    searchParams.append('limit', limit);

    requestTimer.current = setTimeout(() => {
      api.getQuestions(searchParams.toString())
        .then((resQuestions) => {
          setQuestions(resQuestions.results);
          setNextLink(resQuestions.next);
        })
        .catch((err) => console.log('Ошибка загрузки данных: ', err))
        .finally(() => {
          requestTimer.current = null;
          setIsLoading(false);
        });
    }, requestDelay);
  }

  function handleMoreClick() {
    if (nextLink) {
      api.getMoreQuestions(nextLink)
        .then((resQuestions) => {
          setQuestions([...questions, ...resQuestions.results]);
          setNextLink(resQuestions.next);
        })
        .catch((err) => console.log('Ошибка загрузки данных: ', err));
    }
  }

  React.useEffect(() => {
    const searchParams = new URLSearchParams();
    searchParams.append('limit', limit);

    Promise.all([
      api.getQuestionsTags(),
      api.getQuestions(searchParams.toString()),
    ])
      .then(([resTags, resQuestions]) => {
        setTags([{
          id: 0,
          name: 'Все',
          slug: 'all',
        }, ...resTags.results]);
        setQuestions(resQuestions.results);
        setNextLink(resQuestions.next);
      })
      .catch((err) => console.log('Ошибка загрузки данных: ', err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  try {
    return (
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
              isLoading ? <Preloader /> : questions.map((question) => (
                <Question key={question.id} question={question} />
              ))
          }
          {
            nextLink && <button onClick={handleMoreClick} type="button" className={styles['more-button']}>Ещё</button>
          }
        </section>
        {
          loggedIn && <QuestionForm />
        }
      </main>
    );
  } catch (error) {
    console.log('Ошибка рендеринга вопросов: ', error);
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
