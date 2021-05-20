import React from 'react';
import MainLead from "../MainLead/MainLead";
import MainStory from "../MainStory/MainStory";
import MainMentor from "../MainMentor/MainMentor";
import MainAnnotation from "../MainAnnotation/MainAnnotation";
import MainArticle from "../MainArticle/MainArticle";
import MainVideoPreview from "../MainVideoPreview/MainVideoPreview";
import testImg from "../../images/video/video-prev.png"

function Main() {
  return (
    <main className="main">
      <section className="lead page__section">
        <article className="card-container card-container_type_identical">
          <MainLead />
          <MainStory />
        </article>
      </section>

      <section className="main-section page__section">
        <article className="card-container card-container_type_main-article">
          <MainMentor />
          <MainAnnotation />
        </article>
      </section>

      <section className="main-section page__section">
        <MainArticle />
      </section>

      <section className="main-section page__section cards-grid cards-grid_content_small-cards">

    <MainVideoPreview/>
      <article className="card card_content_video card-pagination_page_main">
        <div className="video">
          <a href="./films.html" className="card__link-wrap">
            <img src={testImg} alt="Превью видео" className="video__img" />
            <ul className="video__rubric-list">
              <li>
                <p className="rubric video__rubric">рубрика</p>
              </li>
              <li>
                <p className="rubric video__rubric">рубрика</p>
              </li>
            </ul>
          </a>
        </div>
        <div className="card__video-info">
          <div className="card__title-wrap">
            <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
            <p className="caption card__title-caption">Василий Сигарев, Борисов-Мусотов (Россия), 2009 год</p>
          </div>
          <a href="./films.html" className="link card__link link_action_open-video">смотреть трейлер</a>
        </div>
      </article>


    </section>

    </main>
  )
}

export default Main;