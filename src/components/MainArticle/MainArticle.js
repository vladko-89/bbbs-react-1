import React from 'react';
import { Link } from 'react-router-dom';
function Component(props) {
  const cardStype = {
    backgroundColor: props.color,
  };

  return (
    <article style={cardStype} className="card card_content_quote">
      <Link to="/articles" className="card__link-wrap">
        <h3 className="chapter-title card__quote">{props.title}</h3>
      </Link>
      <Link to="/articles" className="link card__link">читать статью</Link>
    </article>
  )
}

export default Component