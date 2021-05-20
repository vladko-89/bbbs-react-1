import React from 'react';
import MainLead from "../MainLead/MainLead";
import MainStory from "../MainStory/MainStory";
import MainMentor from "../MainMentor/MainMentor";
import MainAnnotation from "../MainAnnotation/MainAnnotation";
import MainArticle from "../MainArticle/MainArticle";

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
        <MainMentor/>
        <MainAnnotation/>
        </article>
      </section>

      <section class="main-section page__section">
<MainArticle/>
    </section>

    </main>
  )
}

export default Main;