import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFoundImage from '../../images/svg/404-page.svg';

function PageNotFound() {
  return (
    <section className="error">
      <img
        src={pageNotFoundImage}
        alt="Старшие Братья Старшие Сестры"
        className="error__img"
      />
      <h1 className="error__number">404</h1>
      <div className="error__text">
        <p className="section-title">К сожалению, запрашиваемая страница не&nbsp;найдена.</p>
        <p className="section-title">Попробуйте перейти на главную&nbsp;страницу</p>
      </div>
      <button
        className="button button_theme_light error__button"
        type="button"
        onClick="document.location='../index.html'"
      >
        <Link to="./" className="button__text">Вернуться на главную</Link>
      </button>
    </section>
  );
}

export default PageNotFound;
