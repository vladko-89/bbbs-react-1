import React from 'react';
import { Link } from 'react-router-dom';
function Component() {
  return (
    <article class="card card_color_blue card_content_quote">
      <Link to="/articles" class="card__link-wrap">
        <h3 class="chapter-title card__quote">Развитие детей-сирот отличается от развития детей, живущих в семьях. Все  этапы развития у детей-сирот проходят с искажениями и имеют ряд негативных  особенностей.</h3>
      </Link>
      <Link to="/articles" class="link card__link">читать статью</Link>
    </article>
  )
}

export default Component