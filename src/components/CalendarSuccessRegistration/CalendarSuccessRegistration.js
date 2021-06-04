/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// import { format } from 'date-fns';
// import ruLocale from 'date-fns/locale/ru';

function CalendarSuccessRegistration({ isOpen, handleCloseSuccessRegPopup, currentEvent }) {
  return (
    <div className={`popup popup_type_done ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container popup__container_type_done">
        <div className="calendar__image-done" />
        <button aria-label="cancel" className="popup__close popup__cancel" type="button" onClick={handleCloseSuccessRegPopup} />
        <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-done ">
          Вы записаны на мероприятие «
          {currentEvent.title }
          »
          .
        </h2>
        <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-done">
          Если у вас не получится прийти — отмените, пожалуйста, запись.
        </h2>
        <button className="button calendar__back popup__cancel" type="button" onClick={handleCloseSuccessRegPopup}>Вернуться к календарю</button>
      </form>
    </div>
  );
}
CalendarSuccessRegistration.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleCloseSuccessRegPopup: PropTypes.func.isRequired,
  currentEvent: PropTypes.shape({
    startAt: PropTypes.string,
    endAt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    seats: PropTypes.number,
    takenSeats: PropTypes.number,
    address: PropTypes.string,
    contact: PropTypes.string,
  }).isRequired,
};

export default CalendarSuccessRegistration;
