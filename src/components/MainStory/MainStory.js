import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MainStory({ imageUrl, title }) {
  return (
    <article className="card card_content_media">
      <img src={imageUrl} alt="История Марины и Алины" className="card__media-img" />
      <Link to="/stories" className="card__media-link section-title">{title}</Link>
    </article>
  );
}
MainStory.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MainStory;
