import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import MainMentor from '../MainMentor/MainMentor';
import PlacesCards from '../PlacesCards/PlacesCards';

function Places({
  activeRubrics,
  selectRubric,
}) {
  const FilterArrayFirst = [
    {
      name: 'Все',
      slug: 'All',
    },
    {
      name: 'Выбор наставников',
      slug: 'chosen',
    },
    {
      name: 'Музеи',
      slug: 'museums',
    },
    {
      name: 'Парки',
      slug: 'parks',
    },
    {
      name: 'Театры',
      slug: 'theatres',
    },
    {
      name: 'Спорт',
      slug: 'sport',
    },
    {
      name: 'Экскурсии',
      slug: 'excursions',
    },
    {
      name: 'Секции',
      slug: 'sections',
    },
    {
      name: '8-10 лет',
      slug: '8-10',
    },
    {
      name: '11-13 лет',
      slug: '11-13',
    },
    {
      name: '14-18 лет',
      slug: '14-18',
    },
    {
      name: '18+ лет',
      slug: '18+',
    },
  ];

  return (
    <div className="main">
      <section className="lead page__section">
        <MainTitle title="Куда пойти" />
        <Filter
          array={FilterArrayFirst}
          selectRubric={selectRubric}
        />
      </section>
      <MainMentor
        title="Сплав на байдарках в две строки"
        address="усадьба Архангельское в две строки"
        imageUrl="https://picsum.photos/1125/394"
        link="https://www.moscowzoo.ru/"
        info="Девока, 10 лет. Активный"
        tags={['sport', '8-10', 'chosen']}
        activeRubrics={activeRubrics}
        description={'Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и,\nАннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.'}
      />
      <PlacesCards activeRubrics={activeRubrics} />
    </div>
  );
}

Places.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
};

export default Places;
