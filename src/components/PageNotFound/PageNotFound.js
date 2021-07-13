import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFoundImage from '../../images/svg/404-page.svg';

function PageNotFound() {
  React.useEffect(() => {
    const footer = document.querySelector('footer');
    const prevDisplayStyle = footer.style.display;
    footer.style.display = 'none';

    return () => { footer.style.display = prevDisplayStyle; };
  }, []);

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
      <Link to="/" className="button button_theme_light error__button button__text">Вернуться на главную</Link>
    </section>
  );
}

export default PageNotFound;
