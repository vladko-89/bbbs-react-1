/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

function CalendarConfirmation({
  isOpen, onClose, handleSuccessRegClick, currentEvent,
}) {
  return (
    <div className={`popup popup_type_confirmation ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container popup__container_type_confirmation">
        <button aria-label="close" className="popup__close popup__cancel" type="button" onClick={onClose} />
        <h2 className="section-title calendar__title_type_popup calendar__title_type_confirmation">
          {`Подтвердить запись на мероприятие
          "${currentEvent.title}"
          ${format(new Date(currentEvent.startAt), 'd', { locale: ruLocale })} ${format(new Date(currentEvent.startAt), 'MMMM', { locale: ruLocale })}
          с ${format(new Date(currentEvent.startAt), 'H:mm')}–${format(new Date(currentEvent.endAt), 'H:mm')}`}
        </h2>
        <div className="calendar__buttons">
          <button className="button button_theme_light calendar__confirm" type="button" onClick={handleSuccessRegClick}>Подтвердить запись</button>
          <button className="button popup__cancel" type="button" onClick={onClose}>Отменить</button>
        </div>
      </form>
    </div>
  );
}
CalendarConfirmation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleSuccessRegClick: PropTypes.func.isRequired,
  currentEvent: PropTypes.shape({
    startAt: PropTypes.string,
    endAt: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
export default CalendarConfirmation;
