import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MainVideo(props){
  return(
    <article className="card-container card-container_type_main-video">
    <div className="card card_color_yellow card_content_video-preview">
      <div className="card__title-wrap">
        <Link to="/video" className="card__link-wrap">
          <h2 className="section-title card__title">{props.title}</h2>
        </Link>
        <p className="caption card__title-caption">{props.info}</p>
      </div>
      <a href={props.link} className="link card__link link_action_open-video">смотреть видео</a>
    </div>
    <div className="card card_color_yellow card_content_video video">
      <Link to="/video" className="card__link-wrap">
        <img src={props.imageUrl} alt="Превью видео" className="video__img video__img_position_main-video"/>
      </Link>
    </div>
  </article>
  )
}

MainVideo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}
MainVideo.defaultProps = {
  title: 'Название',
  info: 'О видео',
  link: "/",
  imageUrl: "https://learn.getgrav.org/system/images/media/thumb-jpg.png",
};

export default MainVideo;