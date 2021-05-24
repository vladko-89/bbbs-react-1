/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function CalendarConfirmation({ isOpen, onClose, handleSuccessRegClick }) {
  return (
    <div className={`popup popup_type_confirmation ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container popup__container_type_confirmation">
        <button aria-label="close" className="popup__close popup__cancel" type="button" onClick={onClose} />
        <h2 className="section-title calendar__title_type_popup calendar__title_type_confirmation">
          Подтвердить запись на мероприятие «Субботний meet up: учимся проходить интервью» 5 декабря с 12:00–14:00
        </h2>
        <div className="calendar__buttons">
          <button className="button button_theme_light calendar__confirm" type="button" onClick={handleSuccessRegClick}>Подтвердить запись</button>
          <button className="button popup__cancel" type="button">Отменить</button>
        </div>
      </form>
    </div>
  );
}
CalendarConfirmation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleSuccessRegClick: PropTypes.func.isRequired,
};
export default CalendarConfirmation;
