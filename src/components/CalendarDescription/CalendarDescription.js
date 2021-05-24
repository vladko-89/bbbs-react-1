/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function CalendarDescription({ isOpen, onClose, handleDescriptionClick }) {
  return (
    <div className={`popup popup_type_description ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container popup__container_type_calendar">
        <button aria-label="close" className="popup__close popup__cancel" type="button" onClick={onClose} />
        <div className="calendar__caption">
          <div className="calendar__info">
            <p className="calendar__type">Волонтёры + дети</p>
            <p className="calendar__weekday">Декабрь / понедельник</p>
          </div>
          <div className="calendar__about">
            <h2 className="section-title calendar__title calendar__title_type_popup">Занятие с выпускниками: как составить резюме</h2>
            <p className="calendar__date">20</p>
          </div>
        </div>
        <div className="calendar__meetup">
          <p className="calendar__time">12:00–14:00</p>
          <p className="calendar__place">Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)</p>
          <p className="calendar__contact">Александра, +7 926 356-78-90</p>
          <div className="calendar__description">
            <p className="paragraph calendar__desc-paragraph">
              Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не
              так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба &laquo;Наставник PRO&raquo;, которую мы
              хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.
            </p>
          </div>
          <div className="calendar__submit">
            <button className="button button_theme_light button_action_confirm" type="button" onClick={handleDescriptionClick}>Записаться</button>
            <p className="calendar__place-left">Осталось 5 мест</p>
          </div>
        </div>
      </form>
    </div>

  );
}
CalendarDescription.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleDescriptionClick: PropTypes.func.isRequired,
};
export default CalendarDescription;
