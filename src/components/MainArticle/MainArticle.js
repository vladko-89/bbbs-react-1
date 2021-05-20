import React from 'react';
import { Link } from 'react-router-dom';
function Component() {
  return (
    <article className="card card_color_blue card_content_quote">
      <Link to="/articles" className="card__link-wrap">
        <h3 className="chapter-title card__quote">Развитие детей-сирот отличается от развития детей, живущих в семьях. Все  этапы развития у детей-сирот проходят с искажениями и имеют ряд негативных  особенностей.</h3>
      </Link>
      <Link to="/articles" className="link card__link">читать статью</Link>
    </article>
  )
}

export default Component