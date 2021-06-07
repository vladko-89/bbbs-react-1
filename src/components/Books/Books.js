import React from 'react';

export default function Books() {
  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Книги</h1>
        <div className="tags">
          <ul className="tags__list">
            <li className="tags__list-item">
              <button className="button tags__button tags__button_active" type="button">Все</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Научные</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Художественные</button>
            </li>
          </ul>
        </div>
      </section>

      <section className="cards-grid cards-grid_content_small-cards page__section">
        <article className="card-container card-pagination">
          <div className="card card_content_book">
            <div className="book book_color_pink">
              <h2 className="section-title book__title">Жизнь после утраты</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик, Зинтл Элизабет</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_blue">
              <h2 className="section-title book__title">Жизнь после утраты. Психология горевания</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик,</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_pink">
              <h2 className="section-title book__title">Жизнь после утраты</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик, Зинтл Элизабет</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_blue">
              <h2 className="section-title book__title">Жизнь после утраты. Психология горевания</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик,</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_pink">
              <h2 className="section-title book__title">Жизнь после утраты</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик, Зинтл Элизабет</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_blue">
              <h2 className="section-title book__title">Жизнь после утраты. Психология горевания</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик,</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_pink">
              <h2 className="section-title book__title">Жизнь после утраты</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик, Зинтл Элизабет</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_blue">
              <h2 className="section-title book__title">Жизнь после утраты. Психология горевания</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик,</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_pink">
              <h2 className="section-title book__title">Жизнь после утраты</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик, Зинтл Элизабет</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_blue">
              <h2 className="section-title book__title">Жизнь после утраты. Психология горевания</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик,</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_pink">
              <h2 className="section-title book__title">Жизнь после утраты</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик, Зинтл Элизабет</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_blue">
              <h2 className="section-title book__title">Жизнь после утраты. Психология горевания</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик,</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_pink">
              <h2 className="section-title book__title">Жизнь после утраты</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик, Зинтл Элизабет</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_blue">
              <h2 className="section-title book__title">Жизнь после утраты. Психология горевания</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик,</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_pink">
              <h2 className="section-title book__title">Жизнь после утраты</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик, Зинтл Элизабет</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
          <div className="card card_content_book">
            <div className="book book_color_blue">
              <h2 className="section-title book__title">Жизнь после утраты. Психология горевания</h2>
              <div className="book__info">
                <p className="caption book__author">Волкан Вамик,</p>
                <p className="caption book__year">2011 год</p>
              </div>
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
