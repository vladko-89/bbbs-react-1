import React from 'react';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import PropTypes from 'prop-types';

// TODO declension of numbers, slug integraiton (example: main data)
function CalendarEvent({
  booked, title, address, contact, startAt, endAt, seats, takenSeats, onCancel, onDescription,
}) {
  const avaiblePlaces = seats - takenSeats;
  return (
    <article className="calendar calendar_selected">
      <div className="calendar__caption">
        <div className="calendar__info">
          <p className="calendar__type">Волонтёры + дети</p>
          <p className="calendar__weekday">
            {`${format(new Date(startAt), 'LLL', { locale: ruLocale })}
            / ${format(new Date(startAt), 'iiii', { locale: ruLocale })}
            `}
          </p>
        </div>
        <div className="calendar__about">
          <h2 className="section-title calendar__title">
            {title}
          </h2>
          <p className="calendar__date">{format(new Date(startAt), 'dd', { locale: ruLocale })}</p>
        </div>
      </div>
      <div className="calendar__meetup">
        <ul className="calendar__info-list">
          <li className="calendar__info-item">
            <p className="calendar__time">
              {`${format(new Date(startAt), 'H:mm')}–${format(new Date(endAt), 'H:mm')}
              `}
            </p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__place">
              {address}
            </p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__contact">{contact}</p>
            <p className="calendar__contact" />
          </li>
        </ul>
        <div className="calendar__submit">
          { booked
          && (
          <button
            className="button button_theme_light calendar__button calendar__button_selected calendar__button_action_sign-up"
            type="button"
            onClick={onCancel}
          >
            Отменить запись
          </button>
          )}
          { !booked
          && (
          <button
            className="button button_theme_light calendar__button calendar__button_action_sign-up"
            type="button"
            onClick={onCancel}
            disabled={!avaiblePlaces}
          >
            Записаться
          </button>
          )}
          <p className="calendar__place-left">
            {avaiblePlaces ? `Осталось ${avaiblePlaces} мест` : 'Запись закрыта'}
          </p>
          <button
            className="button calendar__button-dots button_theme_light"
            type="button"
            onClick={onDescription}
          >
            &#8226;&#8226;&#8226;
          </button>
        </div>
      </div>
    </article>
  );
}
CalendarEvent.propTypes = {
  booked: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired,
  seats: PropTypes.number.isRequired,
  takenSeats: PropTypes.number.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDescription: PropTypes.func.isRequired,
};

export default CalendarEvent;
