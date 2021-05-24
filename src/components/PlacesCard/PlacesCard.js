import React from 'react';
import PropTypes from 'prop-types';
import MentorChoice from '../MentorChoice/MentorChoice';
import CardCaption from '../CardCaption/CardCaption';

function PlacesCard(
  {
    color,
    choice,
    tittle,
    subtitle,
    caption,
    textCaption

  }) {
  return (
    <article class="card-container card-container_type_article">
      <div class={`card card_color_${color}`}>
        {choice && <MentorChoice />}
        <div class="card__title-wrap">
          <h2 class="section-title card__title">
            {tittle}
          </h2>
          <p class="caption card__title-caption">
            {subtitle}
          </p>
        </div>
        <a href="#" class="link card__link">перейти на сайт</a>
      </div>

      <div class="card card_content_annotation">
        <div class="card__content">
          {caption && <CardCaption textCaption={textCaption} />}
          <div class="card__annotation">
            <p class="paragraph card__paragraph">Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
            <p class="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
          </div>
        </div>
      </div>
    </article>
  );
}

PlacesCard.propTypes = {
  color: PropTypes.string.isRequired,
  choice: PropTypes.bool,
  tittle: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  caption: PropTypes.bool,
  textCaption: PropTypes.string,
}

export default PlacesCard;