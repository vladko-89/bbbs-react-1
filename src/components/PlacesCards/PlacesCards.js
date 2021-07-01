import React from 'react';
import PropTypes from 'prop-types';
import PlacesCard from '../PlacesCard/PlacesCard';
import { colorizeCards } from '../../utils/utils';
import { colors } from '../../utils/Constants';

function PlacesCards({ places }) {
  const coloredCards = colorizeCards(places, colors);
  console.log(coloredCards);
  return (
    <section className="cards-grid page__section">
      {coloredCards.map((card) => (
        <PlacesCard
          key={card.id}
          title={card.title}
          description={card.description}
          address={card.address}
          color={card.color}
          chosen={card.chosen}
          info={card.info}
          link={card.link}
        />
      ))}
    </section>
  );
}

PlacesCards.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlacesCards;
