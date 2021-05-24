import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MainArticle({ color, title }) {
  const cardStype = {
    backgroundColor: color,
  };

  return (
    <article style={cardStype} className="card card_content_quote">
      <Link to="/articles" className="card__link-wrap">
        <h3 className="chapter-title card__quote">{title}</h3>
      </Link>
      <Link to="/articles" className="link card__link">читать статью</Link>
    </article>
  );
}
MainArticle.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainArticle;
