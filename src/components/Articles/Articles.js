/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import MainArticle from './MainArticle/MainArticle';

import { mainArticle as leadArticle } from '../../utils/articlesData';

import './Articles.scss';

export default function Articles({ mainArticle }) {
  return (
    <main className="main">
      <section className="lead page__section">
        <MainTitle title="Статьи" />
      </section>

      <section className="main-card page__section">
        <MainArticle {...mainArticle} />
      </section>

      <section className="cards-grid page__section">
        <article className="card-container card-container_type_article">
          <div className="card card_color_green">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Причины подростковой агрессии</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_yellow">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Самоубийство в подростковом возрасте. Интервью с психологом</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_pink">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Причины подростковой агрессии</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_blue">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Девиантное повидение детей-сирот</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_pink">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Симбиоз со знаком «плюс» и симбиоз со знаком «минус» – для чего нужен переходный</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_green">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Самоубийство в подростковом возрасте. Интервью с психологом</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_yellow">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Причины подростковой агрессии</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_green">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Самоубийство в подростковом возрасте. Интервью с психологом</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_blue">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Причины подростковой агрессии</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_pink">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Девиантное повидение детей-сирот</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_blue">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Симбиоз со знаком «плюс» и симбиоз со знаком «минус» – для чего нужен переходный</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_yellow">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Самоубийство в подростковом возрасте. Интервью с психологом</h2>
              <p className="caption card__title-caption">Ирина Стасенко, педагог-психолог</p>
            </div>
            <a href="./article.html" className="link card__link">читать на сайте</a>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="pagination page__section">
        <nav className="pagination__nav" aria-label="Навигация по страницам">
          <ul className="pagination__list">
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link pagination__link_active">1</a></li>
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link">2</a></li>
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link">3</a></li>
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link">4</a></li>
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link">5</a></li>
            <li className="pagination__list-item section-title">...</li>
            <li className="pagination__list-item section-title"><a href="#" className="pagination__link">18</a></li>
          </ul>
          <img src="./images/svg/arrow-right-grey.svg" alt="стрелка вправо" className="pagination__arrow" />
        </nav>
      </section>
    </main>
  );
}

Articles.defaultProps = {
  mainArticle: leadArticle,
};

Articles.propTypes = {
  mainArticle: PropTypes.objectOf({
    title: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    annotation: PropTypes.arrayOf(PropTypes.string),
  }),
};
