import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/svg/footer-logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer__logo">
        <img className="footer__logo-image" src={logo} alt="Логотип Старшие Братья Старшие Сестры России" />
      </Link>

      <a href="https://www.nastavniki.org/campaign/pomoch-dengami" class="button footer__button" rel="noreferrer" target="_blank">
        Помочь деньгами
      </a>
      <div class="footer__column footer__column_content_concept">
        <p class="footer__brand">
          &copy; Старшие Братья Старшие Сестры
        </p>
        <div class="footer__copyright">
          <p class="footer__authors">
            Разработка – студенты
            <a href="https://praktikum.yandex.ru/" class="footer__production" rel="noreferrer" target="_blank">
              Яндекс.Практикум
            </a>
          </p>
          <p class="footer__design">
            Концепция и дизайн –
            <a href="https://krkr.design/" class="footer__production" rel="noreferrer" target="_blank">
              krkr.design
            </a>
          </p>
        </div>
      </div>
      <div class="footer__column footer__column_content_info">
        <ul class="footer__column-list">
          <li class="footer__column-links">
            <Link to="/about" class="footer__column-link" >
              О проекте
            </Link>
          </li>
          <li class="footer__column-links">
            <Link to="/calendar" class="footer__column-link" >
              Календарь
            </Link>
          </li>
          <li class="footer__column-links">
            <Link to="/place" class="footer__column-link" >
              куда пойти
            </Link>
          </li>
          <li class="footer__column-links">
            <Link to="/questions" class="footer__column-link" >
              вопросы
            </Link>
          </li>
          <li class="footer__column-links">
            <Link to="/read-watch-main" class="footer__column-link" >
              читать и смотреть
            </Link>
          </li>
          <li class="footer__column-links">
            <Link to="/rights" class="footer__column-link" >
              права детей
            </Link>
          </li>
          <li class="footer__column-links">
            <Link to="/stories" class="footer__column-link" >
              истории
            </Link>

          </li>
        </ul>
      </div>
      <div className="footer__column footer__column_content_social">
        <ul className="footer__column-list">
          <li className="footer__column-links">
            <a
              href="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
              className="footer__column-link"
              target="_blank"

              rel="noreferrer">

              facebook
            </a>
          </li>
          <li className="footer__column-links">
            <a
              href="https://vk.com/big.brothers.big.sisters"
              className="footer__column-link"
              target="_blank"

              rel="noreferrer">
              vkontakte
            </a>
          </li>
          <li class="footer__column-links">
            <a href="https://www.instagram.com/nastavniki_org/" class="footer__column-link" target="_blank" rel="noreferrer">
              instagram
            </a>
          </li>
          <li class="footer__column-links">
            <a href="https://www.youtube.com/user/Nastavniki/"
              class="footer__column-link"
              target="_blank"
              rel="noreferrer">
              youtube
            </a>

          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
