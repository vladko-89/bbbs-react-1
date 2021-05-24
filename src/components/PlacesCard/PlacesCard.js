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
    textCaption,

  },
) {
  return (
    <article className="card-container card-container_type_article">
      <div className={`card card_color_${color}`}>
        {choice && <MentorChoice />}
        <div className="card__title-wrap">
          <h2 className="section-title card__title">
            {tittle}
          </h2>
          <p className="caption card__title-caption">
            {subtitle}
          </p>
        </div>
        <a href="/" className="link card__link">
          перейти на сайт
        </a>
      </div>

      <div className="card card_content_annotation">
        <div className="card__content">
          {caption && <CardCaption textCaption={textCaption} />}
          <div className="card__annotation">
            <p className="paragraph card__paragraph">Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
            <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
          </div>
        </div>
      </div>
    </article>
  );
}

PlacesCard.propTypes = {
  color: PropTypes.string.isRequired,
  choice: PropTypes.bool.isRequired,
  tittle: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  caption: PropTypes.bool.isRequired,
  textCaption: PropTypes.string.isRequired,
};

export default PlacesCard;
