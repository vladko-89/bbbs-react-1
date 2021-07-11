import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RightsCard({
  card,
  onClickCard,
}) {
  function handleClick() {
    onClickCard(card);
  }
  return (
    <>
      <Link to={`/rights/${card.id}`} onClick={handleClick} className="rights__link">
        <article className="catalog-card card-pagination card-pagination_type_shapes">
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
      </Link>
    </>
  );
}

RightsCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    title: PropTypes.string,
    form: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, slug: PropTypes.string })),
  }).isRequired,
  onClickCard: PropTypes.func.isRequired,
};

export default RightsCard;
