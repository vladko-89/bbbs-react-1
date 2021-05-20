import React from 'react';
import { Link } from 'react-router-dom';
import marinaStory from "../../images/stories/DG7B0561(1).jpg";

function MainStory() {
  return (
    <article className="card card_content_media">
    <img src={marinaStory} alt="История Марины и Алины" className="card__media-img" />
    <Link to="/stories" className="card__media-link section-title">История Марины и Алины</Link>
  </article>
  )
}

export default MainStory;