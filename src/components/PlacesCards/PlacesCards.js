import React from 'react';
import PlacesCard from '../PlacesCard/PlacesCard';

function PlacesCards() {
  const cards = [
    {
      id: 1,
      color: 'green',
      chosen: true,
      tittle: 'Название места несколько слов',
      name: 'Адрес места в одну строку',
      caption: true,
      info: 'Девока, 10 лет. Активный отдых',
      link: 'https://www.moscowzoo.ru/',

    },
    {
      id: 2,
      color: 'yellow',
      chosen: false,
      tittle: 'Название места',
      name: 'Длинный адрес места в несколько строк, длинный адрес места.',
      caption: false,
      link: 'https://www.moscowzoo.ru/',

    },
    {
      id: 3,
      color: 'pink',
      chosen: true,
      tittle: 'Фотосессия на природе',
      name: 'Адрес места в одну строку',
      caption: true,
      info: 'Девока, 10 лет. Активный отдых',
      link: 'https://www.moscowzoo.ru/',

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
          chosen={card.chosen}
          info={card.info}
          link={card.link}
          caption={card.caption}
        />
      ))}
    </section>
  );
}

export default PlacesCards;
