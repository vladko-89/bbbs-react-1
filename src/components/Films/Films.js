import React from 'react';

export default function Films() {
  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Фильмы</h1>
        <div className="tags">
          <ul className="tags__list">
            <li className="tags__list-item">
              <button className="button tags__button tags__button_active" type="button">Все</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Документальный</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Драма</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Приключение</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Комедия</button>
            </li>
          </ul>
        </div>
      </section>

      <section className="cards-grid cards-grid_content_small-cards page__section">
        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                <p className="caption card__title-caption">
                  Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жизнь Кабачка</h2>
                <p className="caption card__title-caption">
                  Клод Баррас, мультфильм, Швейцария, Франция, 2016
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Волчок</h2>
                <p className="caption card__title-caption">Василий Сигарев, Россия, 2009 год</p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                <p className="caption card__title-caption">
                  Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                <p className="caption card__title-caption">
                  Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Волчок</h2>
                <p className="caption card__title-caption">Василий Сигарев, Россия, 2009 год</p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жизнь Кабачка</h2>
                <p className="caption card__title-caption">
                  Клод Баррас, мультфильм, Швейцария, Франция, 2016
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                <p className="caption card__title-caption">
                  Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                <p className="caption card__title-caption">
                  Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Волчок</h2>
                <p className="caption card__title-caption">Василий Сигарев, Россия, 2009 год</p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жизнь Кабачка</h2>
                <p className="caption card__title-caption">
                  Клод Баррас, мультфильм, Швейцария, Франция, 2016
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                <p className="caption card__title-caption">
                  Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                <p className="caption card__title-caption">
                  Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Волчок</h2>
                <p className="caption card__title-caption">Василий Сигарев, Россия, 2009 год</p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жизнь Кабачка</h2>
                <p className="caption card__title-caption">
                  Клод Баррас, мультфильм, Швейцария, Франция, 2016
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-pagination">
          <div className="card card_content_video">
            <div className="video">
              <img src="../images/video/video-prev.png" alt="Превью видео" className="video__img" />
              <ul className="video__rubric-list">
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
                <li>
                  <p className="rubric video__rubric">рубрика</p>
                </li>
              </ul>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                <p className="caption card__title-caption">
                  Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">смотреть трейлер</a>
            </div>
          </div>
          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="pagination page__section">
        <nav className="pagination__nav" aria-label="Навигация по страницам">
          <ul className="pagination__list">
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link pagination__link_active">1</a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">2</a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">3</a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">4</a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">5</a>
            </li>
            <li className="pagination__list-item section-title">...</li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">18</a>
            </li>
          </ul>
          <img
            src="../images/svg/arrow-right-grey.svg"
            alt="стрелка вправо"
            className="pagination__arrow"
          />
        </nav>
      </section>
    </main>
  );
}
