/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function CalendarSuccessRegistrationPopup({ isOpen, handleCloseSuccessRegPopup }) {
  return (
    <div className={`popup popup_type_done ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container popup__container_type_done">
        <div className="calendar__image-done" />
        <button aria-label="cancel" className="popup__close popup__cancel" type="button" onClick={handleCloseSuccessRegPopup} />
        <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-done ">
          Вы записаны на мероприятие «Субботний meet up: учимся проходить интервью» 5 декабря с 12:00–14:00.
        </h2>
        <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-done">
          Если у вас не получится прийти — отмените, пожалуйста, запись.
        </h2>
        <button className="button calendar__back popup__cancel" type="button" onClick={handleCloseSuccessRegPopup}>Вернуться к календарю</button>
      </form>
    </div>
  );
}
CalendarSuccessRegistrationPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleCloseSuccessRegPopup: PropTypes.func.isRequired,
};

export default CalendarSuccessRegistrationPopup;
