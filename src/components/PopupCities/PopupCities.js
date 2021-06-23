import React from 'react';
import PropTypes from 'prop-types';

function PopupCities({
  onChangeCities,
  onCloseClick,
  isOpen,
  isCity,
}) {
  const [selectedCity, setSelectedCity] = React.useState('');
  const [citiesWithoutCapitals, setCitiesWithoutCapitals] = React.useState([]);
  const citiesList = JSON.parse(localStorage.getItem('citiesList'));
  // const citiesWithoutCapitals = citiesList
  // .filter((el) => el.name !== 'Санкт-Петербург' && el.name !== 'Москва');
  const handleClickCity = (e) => {
    setSelectedCity(e.target.textContent);
    // eslint-disable-next-line no-console
    console.log(selectedCity);
    onChangeCities(e.target.textContent);
    onCloseClick(e);
  };

  React.useEffect(() => {
    setCitiesWithoutCapitals(citiesList.filter((el) => el.name !== 'Санкт-Петербург' && el.name !== 'Москва'));
    if (isOpen) {
      document.addEventListener('keydown', onCloseClick);
      // setCitiesWithoutCapitals(citiesList.
      // filter((el) => el.name !== 'Санкт-Петербург' && el.name !== 'Москва'));
      setSelectedCity(citiesList.find((el) => el.name === isCity));
    }
    return () => {
      document.removeEventListener('keydown', onCloseClick);
    };
  }, []);
  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    <div
      className={`popup pupup_type_cities cities  ${
        isOpen ? 'popup_opened' : ''
      }`}
      onClick={(event) => onCloseClick(event)}
      onKeyDown={(event) => onCloseClick(event)}
    >
      <div className="popup__container popup__container_type_cities">
        <h2 className="cities__title section-title">Выберите ваш город</h2>
        <ul className="cities__capitals">
          <li className="cities__name">
            <a
              href="#"
              target="_self"
              className="cities__link"
              onClick={handleClickCity}
            >
              Москва
            </a>
          </li>
          <li className="cities__name">
            <a
              href="#"
              target="_self"
              className="cities__link"
              onClick={handleClickCity}
            >
              Санкт-Петербург
            </a>
          </li>
        </ul>
        <ul className="cities__region">
          {citiesWithoutCapitals
            .map((el) => (
              <li className="cities__name" key={el.id}>
                <a
                  href="#"
                  target="_self"
                  className="cities__link"
                  onClick={handleClickCity}
                >
                  {el.name}
                </a>
              </li>
            ))}

        </ul>
      </div>
    </div>
  );
}

PopupCities.propTypes = {
  onChangeCities: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isCity: PropTypes.string.isRequired,
};

export default PopupCities;
