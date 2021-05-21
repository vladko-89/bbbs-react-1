import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MainStory(props) {
  return (
    <article className="card card_content_media">
    <img src={props.imageUrl} alt="История Марины и Алины" className="card__media-img" />
    <Link to="/stories" className="card__media-link section-title">{props.title}</Link>
  </article>
  )
}
MainStory.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}
MainStory.defaultProps = {
  title: 'Название истории',
  imageUrl: "https://learn.getgrav.org/system/images/media/thumb-jpg.png",
};


export default MainStory;