import React from 'react';

function CalendarConfirmation(props) {
  return (
  <div className={`popup popup_type_confirmation ${props.isOpen ? 'popup_opened': ''}`}>
    <form className="popup__container popup__container_type_confirmation">
      <button className="popup__close popup__cancel" type="button" onClick={props.onClose} ></button>
      <h2 className="section-title calendar__title_type_popup calendar__title_type_confirmation">
        Подтвердить запись на мероприятие «Субботний meet up: учимся проходить интервью» 5 декабря с 12:00–14:00
      </h2>
      <div className="calendar__buttons">
        <button className="button button_theme_light calendar__confirm" type="button" onClick={props.handleSuccessRegClick}>Подтвердить запись</button>
        <button className="button popup__cancel" type="button">Отменить</button>
      </div>
    </form>
  </div>
  );
}

export default CalendarConfirmation;
