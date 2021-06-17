/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { placesTextForms } from '../../utils/Constants';
import { declOfNum } from '../../utils/utils';

function CalendarDescription({
  isOpen, onClose, onActionClick, currentEvent,
}) {
  const availablePlaces = currentEvent.seats - currentEvent.takenSeats;
  const declPlaces = declOfNum(availablePlaces, placesTextForms);

  return (
    <div className={`popup popup_type_description ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container popup__container_type_calendar">
        <button aria-label="close" className="popup__close popup__cancel" type="button" onClick={onClose} />
        <div className="calendar__caption">
          <div className="calendar__info">
            <p className="calendar__type">Волонтёры + дети</p>
            <p className="calendar__weekday">
              {`${format(new Date(currentEvent.startAt), 'LLLL', { locale: ruLocale })}
            / ${format(new Date(currentEvent.startAt), 'iiii', { locale: ruLocale })}
            `}
            </p>
          </div>
          <div className="calendar__about">
            <h2 className="section-title calendar__title calendar__title_type_popup">{currentEvent.title}</h2>
            <p className="calendar__date">
              { format(new Date(currentEvent.startAt), 'dd', { locale: ruLocale }) }
            </p>
          </div>
        </div>
        <div className="calendar__meetup">
          <ul className="calendar__info-list">
            <li className="calendar__info-item">
              <p className="calendar__time">
                {`${format(new Date(currentEvent.startAt), 'H:mm')}–${format(new Date(currentEvent.endAt), 'H:mm')}
              `}
              </p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__place">{currentEvent.address}</p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__contact">{currentEvent.contact}</p>
            </li>
          </ul>
          <div className="calendar__description">
            <p className="paragraph calendar__desc-paragraph">
              {currentEvent.description}
            </p>
          </div>
          <div className="calendar__submit">
            <button
              className="button button_theme_light button_action_confirm"
              disabled={!availablePlaces}
              type="button"
              onClick={() => onActionClick(currentEvent)}
            >
              Записаться
            </button>
            <p className="calendar__place-left">
              {' '}
              {availablePlaces ? `Осталось ${availablePlaces} ${declPlaces}` : 'Запись закрыта'}
            </p>
          </div>
        </div>
      </form>
    </div>

  );
}
CalendarDescription.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onActionClick: PropTypes.func.isRequired,
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
export default CalendarDescription;
