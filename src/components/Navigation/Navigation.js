import './Navigation.scss';
import {
  Link, NavLink
} from "react-router-dom";
import PropTypes from 'prop-types';


import React from "react";


function Navigation(props) {


  return (
    <nav className="menu">
      <Link to="./index" target="_self" className="menu__logo">наставники.про</Link>
      <div className={`menu__lists-wrap ${props.mobMenu? "":"menu__lists-wrap_hidden"} `}>
        <ul className="menu__list">
          <li className="menu__list-item">
            <NavLink to="./calendar" className="menu__link" onClick={props.handleClicMobMenu}>Календарь</NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink to="./place." className="menu__link" onClick={props.handleClicMobMenu}>Куда пойти</NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink to="./questions" className="menu__link" onClick={props.handleClicMobMenu}>Вопросы</NavLink>
          </li>
          <li className="menu__list-item menu__dropdown-item">
            <NavLink to="./read-watch-main" className="menu__link" onClick={props.handleClicMobMenu}>Читать и смотреть</NavLink>
            <ul className="menu__dropdown-list">
              <li className="menu__dropdown-list-item">
                <NavLink to="./catalog" className="link menu__dropdown-link" onClick={props.handleClicMobMenu}>Справочник</NavLink>
              </li>
              <li className="menu__dropdown-list-item">
                <NavLink to="./video.html" className="link menu__dropdown-link" onClick={props.handleClicMobMenu}>Видео</NavLink>
              </li>
              <li className="menu__dropdown-list-item">
                <NavLink to="./articles" className="link menu__dropdown-link" onClick={props.handleClicMobMenu}>Статьи</NavLink>
              </li>
              <li className="menu__dropdown-list-item">
                <NavLink to="./films" className="link menu__dropdown-link" onClick={props.handleClicMobMenu}>Фильмы</NavLink>
              </li>
              <li className="menu__dropdown-list-item">
                <NavLink to="./books" className="link menu__dropdown-link" onClick={props.handleClicMobMenu}>Книги</NavLink>
              </li>
            </ul>
          </li>
          <li className="menu__list-item">
            <NavLink to="./rights" className="menu__link" onClick={props.handleClicMobMenu}>Права детей</NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink to="./stories" className="menu__link" onClick={props.handleClicMobMenu}>Истории</NavLink>
          </li>
        </ul>

        <ul className={`menu__list menu__list_type_social ${props.mobMenu? "": "menu__list_hidden"}`}>
          <li className="menu__list-item">
            <a href="https://www.facebook.com/BigBrothers.BigSisters.Russia/" className="menu__link"
                  target="_blank" onClick={props.handleClicMobMenu}>facebook</a>
          </li>
          <li className="menu__list-item">
            <a href="https://vk.com/big.brothers.big.sisters" className="menu__link" target="_blank" onClick={props.handleClicMobMenu}>vkontakte</a>
          </li>
          <li className="menu__list-item">
            <a href="https://www.instagram.com/nastavniki_org/" className="menu__link" target="_blank" onClick={props.handleClicMobMenu}>instagram</a>
          </li>
          <li className="menu__list-item">
            <a href="https://www.youtube.com/user/Nastavniki/" className="menu__link" target="_blank" onClick={props.handleClicMobMenu}>youtube</a>
          </li>
        </ul>
      </div>

      <button className={`menu__burger ${props.mobMenu? "menu__burger_active":""}`} type="button" onClick={props.handleClicMobMenu}>
        <span className="menu__burger-line"></span>
        <span className="menu__burger-line"></span>
        <span className="menu__burger-line"></span>
      </button>
      <ul className="menu__button-list">
        <li className="menu__button-item">
          {/*здесь компонент поиска*/}
        </li>
        <li className="menu__button-item">
          <Link to={"/profile"}
                className={`menu__button ${props.loggedIn ? 'menu__button_type_active-user' : 'menu__button_type_user'}`}
                type="button" aria-label="Личный кабинет"
                title="Личный кабинет" onClick={props.handleClicMobMenu}/>
        </li>
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  loggedIn: PropTypes.bool,
  mobMenu: PropTypes.bool,
  handleClicMobMenu: PropTypes.func
}

export default Navigation;
