import React from 'react';
import PropTypes from 'prop-types';
import PlacesCard from '../PlacesCard/PlacesCard';

function PlacesCards(
  {
    activeRubrics,
  },
) {
  const cards = [
    {
      id: 1,
      color: 'green',
      chosen: true,
      title: 'Название места несколько слов',
      name: 'Адрес места в одну строку',
      caption: true,
      info: 'Девочка, 10 лет. Активный отдых',
      link: 'https://www.moscowzoo.ru/',
      tags: [{ slug: 'sport' }, { slug: 'chosen' }, { slug: '8-10' }],
    },
    {
      id: 2,
      color: 'yellow',
      chosen: false,
      title: 'Название места',
      name: 'Длинный адрес места в несколько строк, длинный адрес места.',
      caption: false,
      link: 'https://www.moscowzoo.ru/',
      tags: [{ slug: 'excursions' }],
    },
    {
      id: 3,
      color: 'pink',
      chosen: true,
      title: 'Фотосессия на природе',
      name: 'Адрес места в одну строку',
      caption: true,
      info: 'Девочка, 10 лет. Активный отдых',
      link: 'https://www.moscowzoo.ru/',
      tags: [{ slug: 'parks' }, { slug: 'chosen' }, { slug: '8-10' }],
    },
  ];
  return (
    <section className="cards-grid page__section">
      {cards.map((card) => (
        <PlacesCard
          key={card.id}
          title={card.title}
          name={card.name}
          color={card.color}
          tags={card.tags}
          chosen={card.chosen}
          info={card.info}
          link={card.link}
          caption={card.caption}
          activeRubrics={activeRubrics}
        />
      ))}
    </section>
  );
}

PlacesCards.defaultProps = {
  activeRubrics: [],
};

PlacesCards.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string),
};

export default PlacesCards;
