import React from 'react';
import PropTypes from 'prop-types';
import MentorChoice from '../MentorChoice/MentorChoice';
import CardCaption from '../CardCaption/CardCaption';

function PlacesCard(
  {
    key,
    color,
    chosen,
    tittle,
    name,
    caption,

    info,
    link,
  },
) {
  return (
    <article className="card-container card-container_type_article" key={key}>
      <div className={`card card_color_${color}`}>
        {chosen && <MentorChoice />}

        <div className="card__title-wrap">
          <h2 className="section-title card__title">
            {tittle}
          </h2>
          <p className="caption card__title-caption">

            {name}
          </p>
        </div>
        <a href={link} className="link card__link">
          перейти на сайт
        </a>
      </div>

      <div className="card card_content_annotation">
        <div className="card__content">

          {caption && <CardCaption textCaption={info} />}
          <div className="card__annotation">
            <p className="paragraph card__paragraph">Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
            <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, вконце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.</p>
          </div>
        </div>
      </div>
    </article>
  );
}

PlacesCard.propTypes = {
  key: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  chosen: PropTypes.bool.isRequired,
  tittle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  caption: PropTypes.bool.isRequired,
  info: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PlacesCard;
