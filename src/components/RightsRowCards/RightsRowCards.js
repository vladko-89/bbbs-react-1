import React from 'react';
import PropTypes from 'prop-types';
import RightsCard from '../RightsCard/RightsCard';

function RightsRowCards({ array }) {
  return (
    <ul className="rights__row">
      {array.map((card) => (
        <li className="rights__item-card" key={card.id}>
          <RightsCard
            color={card.color}
            form={card.form}
            tags={card.tags}
            title={card.title}
          />
        </li>
      ))}
    </ul>
  );
}

RightsRowCards.propTypes = {
  array: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default RightsRowCards;
