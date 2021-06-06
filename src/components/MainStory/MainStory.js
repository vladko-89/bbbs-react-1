import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MainStory.module.scss';

function MainStory({ imageUrl, title }) {
  return (
    <article className={`${styles.card} ${styles.card_content_media}`}>
      <img src={imageUrl} alt={title} className="card__media-img" />
      <Link to="/stories" className={`${styles['card__media-link']} ${styles['section-title']}`}>{title}</Link>
    </article>
  );
}
MainStory.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MainStory;
