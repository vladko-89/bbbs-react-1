import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import MainMentor from '../MainMentor/MainMentor';
import PlacesCards from '../PlacesCards/PlacesCards';
import PopupCities from '../PopupCities/PopupCities';
import api from '../../utils/Api';

function Places({
  activeRubrics,
  selectRubric,
  currentUser,
  loggedIn,
}) {
  const [isOpenPopupCities, setIsOpenPopupCities] = React.useState(false);
  const [citiesList, setCitiesList] = React.useState([]);
  const [places, setPlaces] = React.useState([]);
  const [city, setCity] = React.useState({});

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
  // закрытие попапа городов
  const handleClose = (event) => {
    if (
      event.key === 'Escape' || event.target.classList.contains('popup_opened')
    ) {
      console.log('Choose city');
    }
    console.log('Choose city');
  };
  const handleChangeCityNotAuth = (place) => {
    const selectedCity = citiesList.find((item) => item.name === place);
    // eslint-disable-next-line no-console
    console.log(`city changed on ${place}`);
    console.log(selectedCity);
    setCity(selectedCity);
    api.getPlaces(selectedCity.id)
      .then((res) => setPlaces(res))
      .catch((err) => console.log(err));
    setIsOpenPopupCities(false);
  };

  React.useEffect(() => {
    if (loggedIn === false) {
      if (places?.length === 0) {
        if (localStorage.getItem('citiesList')) {
          setCitiesList(JSON.parse(localStorage.getItem('citiesList')));
        } else {
          api.getCitiesList()
            .then((res) => setCitiesList(res.results))
            .catch((err) => console.log(err));
        }
        setCity(currentUser.city);
        setIsOpenPopupCities(true);
      }
      if (localStorage.getItem('places')) {
        setPlaces(JSON.parse(localStorage.getItem('places')));
      }
    } else {
      api.getPlaces(currentUser.city.id)
        .then((res) => setPlaces(res))
        .catch((err) => console.log(err));
    }
  }, [currentUser]);
  console.log(places);
  return (
    isOpenPopupCities ? (
      <PopupCities
        isCity={city.name}
        onChangeCities={handleChangeCityNotAuth}
        onCloseClick={handleClose}
        citiesList={citiesList}
        isOpen={isOpenPopupCities}
      />
    ) : (
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
    )
  );
}

Places.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.number,
    city: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isPrimary: PropTypes.bool,
    }),
  }).isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Places;
