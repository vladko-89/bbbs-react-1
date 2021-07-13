import React from 'react';
import PropTypes from 'prop-types';

function EventInProfile({ events, openEventDescription }) {
  return (
    <ul className="coming-events__list">
      {events.map((item) => {
        const date = new Date(item.startAt);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const handleEventClick = () => {
          openEventDescription(item);
          console.log(item);
        };
        return (
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
          <li className="coming-events__event" key={item.id} onClick={handleEventClick}>

            <p className="coming-events__date">
              <span className="coming-events__number">{day}</span>
              {month}
            </p>
            <p className="coming-events__description">
              {item.title}
            </p>

          </li>
        );
      })}
    </ul>
  );
}
EventInProfile.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  openEventDescription: PropTypes.func.isRequired,
};

export default EventInProfile;
