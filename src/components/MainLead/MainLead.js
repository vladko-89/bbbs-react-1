import React from 'react';
import { Link } from 'react-router-dom';
import calendarLogo from "../../images/svg/calendar_logo.svg";

function MainLead() {
  return (
    <article className="card card_color_green stub">
      <div className="stub__upper-element">
        <Link to="/">
          <img src={calendarLogo} alt="Логотип Старшие Братья Старшие Сестры России" className="stub__logo" />
        </Link>
      </div>
      <div className="stub__content">
        <h2 className="section-title stub__text">Наставники.про – цифоровая информационная платформа огрганизации «Старшие Братья Старшие Сестры». Созданная для поддержки наставников программы.</h2>
      </div>
    </article>
  )
}

export default MainLead;