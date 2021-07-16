import React from 'react';
import PropTypes from 'prop-types';

function MeetingDeletePopup({
  title,
  onDeleteClick,
  onCloseClick,
  isOpen,
}) {
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onCloseClick);
    }
    return (() => {
      document.removeEventListener('keydown', onCloseClick);
    });
  });
  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    <div
      className={`popup personal ${isOpen ? 'popup_opened' : ''} `}
      onClick={(event) => onCloseClick(event)}
      onKeyDown={(event) => onCloseClick(event)}
    >
      <div className="popup__container popup__container_type_lk">
        <h2 className="section-title personal__title">{`Удалить встречу ${title} ?`}</h2>
        <div className="popup__buttons">
          <button className="button popup__delete" onClick={onDeleteClick} type="button">
            Удалить
          </button>
          <button
            className="button popup__cancel"
            onClick={(event) => onCloseClick(event)}
            type="button"
          >
            Отмена
          </button>
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
