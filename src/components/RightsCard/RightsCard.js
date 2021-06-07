import React from 'react';
import PropTypes from 'prop-types';

function RightsCard({
  card,
  activeRubrics,
}) {
  return (
    <article className={`catalog-card card-pagination card-pagination_type_shapes ${activeRubrics.length > 0 && card.tags.every((tag) => activeRubrics.indexOf(tag.slug) === -1) ? 'card-container_hidden display_none' : ''}`}>
      <div className={`card card_color_${card.color} card_form_${card.form} rights__card`}>
        <a href="./rights-article.html" className="rights__link">
          <h2 className="section-title">
            {card.title}
          </h2>
          {card.tags.map((tag, index) => (
            <p key={index.toString()} className="rubric rights__rubric">{tag.name}</p>
          ))}
        </a>
      </div>
    </article>
  );
}

RightsCard.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  card: PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    title: PropTypes.string,
    form: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, slug: PropTypes.string })),
  }).isRequired,
};

export default RightsCard;
