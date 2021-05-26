import React from 'react';
//  import PropTypes from 'prop-types';

function EventInProfile({}) {

  return (
    <div>
      <article className="calendar calendar_selected">
        <div className="calendar__caption">
          <div className="calendar__info">
            <p className="calendar__date">05</p>
            <p className="calendar__weekday">Декабрь / понедельник</p>
          </div>
          <div className="calendar__about">
            <p className="calendar__type">Волонтёры + дети</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default EventInProfile;
