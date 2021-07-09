import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function RightsCard({
  card,
  clickOnCard,
}) {
  function handleClick() {
    clickOnCard(card);
  }
  return (
    <>
      <NavLink to="/rights_article" onClick={handleClick}>
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
      </NavLink>
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
  clickOnCard: PropTypes.func.isRequired,
};

export default RightsCard;
