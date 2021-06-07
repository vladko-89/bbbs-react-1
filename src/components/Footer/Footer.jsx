import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/svg/footer-logo.svg';
import { scrollDelay } from '../../utils/Constants';

function Footer() {
  function onLinkNav() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, scrollDelay);
  }
  return (
    <footer className="footer">
      <Link to="/" onClick={onLinkNav} className="footer__logo">
        <img className="footer__logo-image" src={logo} alt="Логотип Старшие Братья Старшие Сестры России" />
      </Link>

      <a href="https://www.nastavniki.org/campaign/pomoch-dengami" className="button footer__button" rel="noreferrer" target="_blank">
        Помочь деньгами
      </a>
      <div className="footer__column footer__column_content_concept">
        <p className="footer__brand">
          &copy; Старшие Братья Старшие Сестры
        </p>
        <div className="footer__copyright">
          <p className="footer__authors">
            Разработка – студенты
            <a href="https://praktikum.yandex.ru/" className="footer__production" rel="noreferrer" target="_blank">
              Яндекс.Практикум
            </a>
          </p>
          <p className="footer__design">
            Концепция и дизайн –
            <a href="https://krkr.design/" className="footer__production" rel="noreferrer" target="_blank">
              krkr.design
            </a>

          </p>
        </div>
      </div>
      <div className="footer__column footer__column_content_info">
        <ul className="footer__column-list">
          <li className="footer__column-links">

            <Link to="/about" onClick={onLinkNav} className="footer__column-link">
              О проекте
            </Link>
          </li>
          <li className="footer__column-links">
            <Link to="/calendar" onClick={onLinkNav} className="footer__column-link">
              Календарь
            </Link>
          </li>
          <li className="footer__column-links">
            <Link to="/place" onClick={onLinkNav} className="footer__column-link">
              куда пойти
            </Link>
          </li>
          <li className="footer__column-links">
            <Link to="/questions" onClick={onLinkNav} className="footer__column-link">
              вопросы
            </Link>
          </li>
          <li className="footer__column-links">
            <Link to="/read-watch-main" className="footer__column-link">
              читать и смотреть
            </Link>
          </li>
          <li className="footer__column-links">
            <Link to="/rights" onClick={onLinkNav} className="footer__column-link">
              права детей
            </Link>
          </li>
          <li className="footer__column-links">
            <Link to="/stories" onClick={onLinkNav} className="footer__column-link">
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
              rel="noreferrer"
            >

              facebook
            </a>
          </li>
          <li className="footer__column-links">
            <a
              href="https://vk.com/big.brothers.big.sisters"
              className="footer__column-link"
              target="_blank"
              rel="noreferrer"
            >
              vkontakte
            </a>
          </li>
          <li className="footer__column-links">
            <a href="https://www.instagram.com/nastavniki_org/" className="footer__column-link" target="_blank" rel="noreferrer">
              instagram
            </a>
          </li>
          <li className="footer__column-links">
            <a
              href="https://www.youtube.com/user/Nastavniki/"
              className="footer__column-link"
              target="_blank"
              rel="noreferrer"
            >
              youtube
            </a>

          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
