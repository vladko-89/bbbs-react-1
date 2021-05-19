import React from 'react';
import { Link } from 'react-router-dom';
//import "./Main.scss";
import calendarLogo from "../../images/svg/calendar_logo.svg";
import marinaStory from "../../images/stories/DG7B0561(1).jpg";
import rafting from "../../images/where-to-go/img-xl.jpg"
function Main() {
  return (
    <main className="main">
      <section className="lead page__section">
        <article className="card-container card-container_type_identical">
          <article className="card card_color_green stub">
            <div className="stub__upper-element">
              <Link to="/">
                <img src={calendarLogo} alt="Логотип Старшие Братья Старшие Сестры России" className="stub__logo" />
              </Link>
            </div>
            <div className="stub__content">
              <h2 className="section-title stub__text">Наставники.про – цифоровая информационная платформа огрганизации «Старшие Братья Старшие Сестры». Созданная для поддержки наставников программы.</h2>
            </div>
          </article>
          <article className="card card_content_media">
            <img src={marinaStory} alt="История Марины и Алины" className="card__media-img" />
            <Link to="/stories" className="card__media-link section-title">История Марины и Алины</Link>
          </article>
        </article>
      </section>

      <section className="main-section page__section">
      <article className="card-container card-container_type_main-article">
        <div className="card card_type_main card_color_yellow">
          <p className="rubric card__rubric">Выбор наставника</p>
          <div className="card__title-wrap">
            <Link to="/place" className="card__link-wrap">
              <h2 className="section-title card__title">Сплав на байдарках в 2 строки</h2>
            </Link>
            <p className="caption card__title-caption">усадьба Архангельское в две строки</p>
          </div>
          <Link to="/place" className="card__link-wrap card__link-wrap_content_article-img">
            <img src={rafting} alt="Сплав на байдарках" className="card__img"/>
          </Link>
          <Link to="#" className="link card__link">перейти на сайт</Link>
        </div>
        <div className="card card_content_annotation card_type_main">
          <div className="card__content">
            <p className="caption card__annotation-caption">Девочка, 10 лет. Активный</p>
            <div className="card__annotation card__annotation_position_main-card">
              <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и,</p>
              <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
            </div>
          </div>
        </div>
      </article>
    </section>

    </main>
  )
}

export default Main;