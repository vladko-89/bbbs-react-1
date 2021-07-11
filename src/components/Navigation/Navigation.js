import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from '../Search/Search';
import CurrentUserContext from '../../contexts/CurrentUser';

function Navigation({
  mobMenu,
  handleClickMobMenu,
  loggedIn,
  onLoginPopup,
  onLogOutClick,
  onChangeCityClick,
  userInfo,
}) {
  // const [city, setCity] = React.useState('');
  // const [isOpenPopupCities, setIsOpenPopupCities] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(currentUser);
  }, [userInfo]);

  return (
    <nav className="menu">
      <Link to="/" target="_self" className="menu__logo">
        наставники.про
      </Link>
      <div
        className={`menu__lists-wrap ${
          mobMenu ? '' : 'menu__lists-wrap_hidden'
        } `}
      >
        <ul className="menu__list">
          <li className="menu__list-item">
            {loggedIn ? (
              <NavLink
                to="./calendar"
                className="menu__link"
                onClick={handleClickMobMenu}
              >
                Календарь
              </NavLink>
            ) : (
              <button
                type="button"
                className="menu__link"
                onClick={onLoginPopup}
              >
                Календарь
              </button>
            )}
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/place"
              className="menu__link"
              onClick={handleClickMobMenu}
            >
              Куда пойти
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/questions"
              className="menu__link"
              onClick={handleClickMobMenu}
            >
              Вопросы
            </NavLink>
          </li>
          <li className="menu__list-item menu__dropdown-item">
            <NavLink
              to="/read-watch-main"
              className="menu__link"
              onClick={handleClickMobMenu}
            >
              Читать и смотреть
            </NavLink>
            <ul className="menu__dropdown-list">
              <li className="menu__dropdown-list-item">
                <NavLink
                  to="/catalog"
                  className="link menu__dropdown-link"
                  onClick={handleClickMobMenu}
                >
                  Справочник
                </NavLink>
              </li>
              <li className="menu__dropdown-list-item">
                <NavLink
                  to="/video"
                  className="link menu__dropdown-link"
                  onClick={handleClickMobMenu}
                >
                  Видео
                </NavLink>
              </li>
              <li className="menu__dropdown-list-item">
                <NavLink
                  to="/articles"
                  className="link menu__dropdown-link"
                  onClick={handleClickMobMenu}
                >
                  Статьи
                </NavLink>
              </li>
              <li className="menu__dropdown-list-item">
                <NavLink
                  to="/films"
                  className="link menu__dropdown-link"
                  onClick={handleClickMobMenu}
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="menu__dropdown-list-item">
                <NavLink
                  to="/books"
                  className="link menu__dropdown-link"
                  onClick={handleClickMobMenu}
                >
                  Книги
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/rights"
              className="menu__link"
              onClick={handleClickMobMenu}
            >
              Права детей
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/stories"
              className="menu__link"
              onClick={handleClickMobMenu}
            >
              Истории
            </NavLink>
          </li>
        </ul>

        <ul
          className={`${mobMenu ? 'menu__list' : 'menu__list_hidden'} menu__list_type_social `}
        >
          <li className="menu__list-item">
            <a
              href="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
              className="menu__link"
              target="_blank"
              rel="noreferrer"
              onClick={handleClickMobMenu}
            >
              facebook
            </a>
          </li>
          <li className="menu__list-item">
            <a
              href="https://vk.com/big.brothers.big.sisters"
              className="menu__link"
              target="_blank"
              rel="noreferrer"
              onClick={handleClickMobMenu}
            >
              vkontakte
            </a>
          </li>
          <li className="menu__list-item">
            <a
              href="https://www.instagram.com/nastavniki_org/"
              className="menu__link"
              target="_blank"
              rel="noreferrer"
              onClick={handleClickMobMenu}
            >
              instagram
            </a>
          </li>
          <li className="menu__list-item">
            <a
              href="https://www.youtube.com/user/Nastavniki/"
              className="menu__link"
              target="_blank"
              rel="noreferrer"
              onClick={handleClickMobMenu}
            >
              youtube
            </a>
          </li>
        </ul>

        <Route path={['/profile', '/calendar', '/place']}>
          <div
            className={`personal-area__user-info ${
              mobMenu ? 'user-info_mobile' : ''
            }`}
          >
            <button
              type="button"
              className="personal-area__user-link personal-area__user-link_type_city "
              onClick={onChangeCityClick}
            >
              {loggedIn ? `${currentUser.city.name}.  Изменить город` : `${currentUser.city.name}. Изменить ваш город`}
            </button>

            <Route path="/profile">
              <Link
                to="/"
                className="personal-area__user-link personal-area__user-link_type_exit"
                onClick={onLogOutClick}
              >
                Выйти
              </Link>
            </Route>
          </div>
        </Route>
      </div>

      <button
        className={`menu__burger ${mobMenu ? 'menu__burger_active' : ''}`}
        type="button"
        rel="noreferrer"
        onClick={handleClickMobMenu}
      >
        <span className="menu__burger-line" />
        <span className="menu__burger-line" />
        <span className="menu__burger-line" />
      </button>
      <ul className="menu__button-list">
        <li className="menu__button-item">
          <Search />
        </li>
        <li className="menu__button-item">
          {loggedIn ? (
            <Link
              to="/profile"
              className="menu__button menu__button_type_active-user"
              type="button"
              aria-label="Личный кабинет"
              title="Личный кабинет"
              onClick={handleClickMobMenu}
            />
          ) : (
            <button
              type="button"
              aria-label="Войти"
              className="menu__button menu__button_type_user"
              onClick={onLoginPopup}
              onKeyPress={handleClickMobMenu}
            />
          )}
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  mobMenu: PropTypes.bool.isRequired,
  handleClickMobMenu: PropTypes.func.isRequired,
  onLoginPopup: PropTypes.func.isRequired,
  onLogOutClick: PropTypes.func.isRequired,
  onChangeCityClick: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.number,
    city: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isPrimary: PropTypes.bool,
    }),
  }).isRequired,
};

export default Navigation;
