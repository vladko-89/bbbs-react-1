/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

function CalendarSuccessRegistration({
  isOpen, handleCloseSuccessRegPopup, currentEvent,
  textPopupButton,
}) {
  return (
    <div className={`popup popup_type_done ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container popup__container_type_done">
        <div className="calendar__image-done" />
        <button aria-label="cancel" className="popup__close popup__cancel" type="button" onClick={handleCloseSuccessRegPopup} />
        <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-done ">
          Вы записаны на мероприятие
        </h2>
        <p className="section-title calendar__title_type_popup calendar__title_type_confirmation">
          {`«${currentEvent.title}»`}
        </p>
        <p className="calendar__title_type_popup calendar__title_type_confirmation calendar__title_margin_bottom">
          {`${format(new Date(currentEvent.startAt), 'd', { locale: ruLocale })} ${format(new Date(currentEvent.startAt), 'MMMM', { locale: ruLocale })}
          с ${format(new Date(currentEvent.startAt), 'HH:mm')}–${format(new Date(currentEvent.endAt), 'HH:mm')}`}
        </p>
        <h2 className="calendar__title_type_popup calendar__title_type_popup-done calendar__title_margin_bottom">
          Если у вас не получится прийти — отмените, пожалуйста, запись.
        </h2>
        <button className="button calendar__back popup__cancel" type="button" onClick={handleCloseSuccessRegPopup}>{`${textPopupButton}`}</button>
      </form>
    </div>
  );
}
CalendarSuccessRegistration.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  textPopupButton: PropTypes.string.isRequired,
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
