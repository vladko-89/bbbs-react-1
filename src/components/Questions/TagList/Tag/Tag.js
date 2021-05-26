import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ isActive, name }) {
  function onClick(event) {
    event.target.classList.toggle('tags__button_active');
  }

  return (
    <li className="tags__list-item">
      <button onClick={onClick} className={`button tags__button${isActive ? ' tags__button_active' : ''}`} type="button">{name}</button>
    </li>
  );
}

Tag.defaultProps = {
  isActive: false,
};

Tag.propTypes = {
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
};
