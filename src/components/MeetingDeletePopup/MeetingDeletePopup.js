import React from 'react';
import PropTypes from 'prop-types';

function MeetingDeletePopup({
  title, onDeleteClick, onCloseClick, isOpen,
}) {
  return (
    <div className={`popup personal ${isOpen ? 'popup_opened' : ''} `}>
      <div className="popup__container popup__container_type_lk">
        <h2 className="section-title personal__title">{title}</h2>
        <div className="popup__buttons">
          <button className="button popup__delete" onClick={onDeleteClick} type="button">Удалить</button>
          <button className="button popup__delete" onClick={onCloseClick} type="button">Отмена</button>
        </div>
      </div>
    </div>
  );
}

MeetingDeletePopup.propTypes = {
  title: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MeetingDeletePopup;
