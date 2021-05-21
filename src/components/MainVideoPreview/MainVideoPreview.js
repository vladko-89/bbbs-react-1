import React from 'react';
import PropTypes from 'prop-types';

function MainVideoPreview(props){

  return(
<article className="card card_content_video card-pagination_page_main">
<div className="video">
  <a href={props.link} className="card__link-wrap">
    <img src={props.imageUrl} alt="Превью видео" className="video__img" />
    <ul className="video__rubric-list">
      <li>
        <p className="rubric video__rubric">{props.rubric}</p>
      </li>
      <li>
        <p className="rubric video__rubric">{props.rubric}</p>
      </li>
    </ul>
  </a>
</div>
<div className="card__video-info">
  <div className="card__title-wrap">
    <h2 className="section-title card__title">{props.title}</h2>
    <p className="caption card__title-caption">{props.caption}</p>
  </div>
  <a href={props.link} className="link card__link link_action_open-video">смотреть трейлер</a>
</div>
</article>
  )
}
MainVideoPreview.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  rubric: PropTypes.string.isRequired,
}
MainVideoPreview.defaultProps = {
  link: "#",
  title: 'Название видео',
  imageUrl: "https://learn.getgrav.org/system/images/media/thumb-jpg.png",
  caption: "имярек 2021",
  rubric: "Рубрика"
};

export default MainVideoPreview;