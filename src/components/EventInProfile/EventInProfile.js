import React from 'react';
import PropTypes from 'prop-types';

function EventInProfile({ events }) {
  return (
    <ul className="coming-events__list">
      {events.map((event) => {
        const date = new Date(event.startAt);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        return (
          <li className="coming-events__event" key={event.id}>
            <p className="coming-events__date">
              <span className="coming-events__number">{day}</span>
              {month}
            </p>
            <p className="coming-events__description">
              {event.title}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
EventInProfile.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventInProfile;
