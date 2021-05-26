import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import MainMentor from '../MainMentor/MainMentor';
import PlacesCards from '../PlacesCards/PlacesCards';

function Places() {
  const FilterArrayFirst = [
    'Все',
    'Выбор наставников',
    'Музеи',
    'Парки',
    'Театры',
    'Спорт',
    'Экскурсии',
    'Секции',
  ];

  const FilterArraySecond = [
    '8-10 лет',
    '11-13 лет',
    '14-18 лет',
    '18+ лет',
  ];

  return (
    <div className="main">
      <section className="lead page__section">
        <MainTitle title="Куда пойти" />
        <Filter
          array={FilterArrayFirst}
          arraySecond={FilterArraySecond}
          onActive={() => console.log('push')}// Временная заглушка
        />
      </section>
      <section className="main-card page__section">
        <article className="card-container card-container_type_main-article">
          <MainMentor
            title="Сплав на байдарках в две строки"
            name="усадьба Архангельское в две строки"
            imageUrl="https://picsum.photos/1125/394"
            link="https://www.moscowzoo.ru/"
          />
          <div className="card card_content_annotation card_type_main">
            <div className="card__content">
              <p className="caption card__annotation-caption">Девочка, 10 лет. Активный</p>
              <div className="card__annotation card__annotation_position_main-card">
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, азадавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и,</p>
                <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. В вать бесконечное количество вопросов, жизнь меняется. Вы будете не по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <PlacesCards />
    </div>
  );
}

export default Places;
