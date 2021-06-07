import React from 'react';
import PropTypes from 'prop-types';
import { citiesList } from '../../utils/Constants';
//  надо реализовать изменение города пользователя и отправку нового города на бэк
// ссылки в списке сменить на спаны
function PopupCities({
  onChangeCities, onCloseClick, isOpen, isCity,
}) {
  const [selectedCity, setSelectedCity] = React.useState('');
  const handleClickCity = (e) => {
    setSelectedCity(e.target.textContent);
    // eslint-disable-next-line no-console
    console.log(selectedCity);
    onChangeCities(e.target.textContent);
    onCloseClick(e);
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onCloseClick);
    }
    setSelectedCity(citiesList[isCity]);
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
          {citiesList.slice(2).map((el) => (
            <li className="cities__name" key={el}>
              <a
                href="#"
                target="_self"
                className="cities__link"
                onClick={handleClickCity}
              >
                {el}
              </a>
            </li>
          ))}
          {/* <li className="cities__name"> */}
          {/*  <a href="#" target="_self" className="cities__link" onClick={handleClickCity}> */}
          {/*    Алексин */}
          {/*  </a> */}
          {/* </li> */}
          {/* <li className="cities__name"> */}
          {/*  <a href="#" target="_self" className="cities__link" onClick={handleClickCity}> */}
          {/*    Барнаул */}
          {/*  </a> */}
          {/* </li> */}
          {/* <li className="cities__name"> */}
          {/*  <a href="#" target="_self" className="cities__link" onClick={handleClickCity}> */}
          {/*    Екатеринбург */}
          {/*  </a> */}
          {/* </li> */}
          {/* <li className="cities__name"> */}
          {/*  <a href="#" target="_self" className="cities__link" onClick={handleClickCity}> */}
          {/*    Зубцов */}
          {/*  </a> */}
          {/* </li> */}
          {/* <li className="cities__name"> */}
          {/*  <a href="#" target="_self" className="cities__link" onClick={handleClickCity}> */}
          {/*    Калининград */}
          {/*  </a> */}
          {/* </li> */}
          {/* <li className="cities__name"> */}
          {/*  <a href="#" target="_self" className="cities__link" onClick={handleClickCity}> */}
          {/*    Киреевск */}
          {/*  </a> */}
          {/* </li> */}
          {/* <li className="cities__name"> */}
          {/*  <a href="#" target="_self" className="cities__link" onClick={handleClickCity}> */}
          {/*    Коломна */}
          {/*  </a> */}
          {/* </li> */}
          {/* <li className="cities__name"> */}
          {/*  <a href="#" target="_self" className="cities__link" onClick={handleClickCity}> */}
          {/*    Новомосковск */}
          {/*  </a> */}
          {/* </li> */}
          {/* <li className="cities__name"> */}
          {/*  <a href="#" target="_self" className="cities__link" onClick={handleClickCity}> */}
          {/*    Орехово-Зуево */}
          {/*  </a> */}
          {/* </li> */}
          {/* <li className="cities__name"> */}
          {/*  <a href="#" target="_self" className="cities__link" onClick={handleClickCity}> */}
          {/*    Тверь */}
          {/*  </a> */}
          {/* </li> */}
          {/* <li className="cities__name"> */}
          {/*  <a href="#" target="_self" className="cities__link" onClick={handleClickCity}> */}
          {/*    Тула */}
          {/*  </a> */}
          {/* </li> */}
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
