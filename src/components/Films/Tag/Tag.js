import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ tag, toggleTag }) {
  function onClick(event) {
    const button = event.target;
    if (tag.id === 0 && !button.classList.contains('tags__button_active')) {
      const activeButtons = button.closest('.tags__list').querySelectorAll('.tags__button_active');
      activeButtons.forEach((b) => b.classList.remove('tags__button_active'));
    } else {
      button.closest('.tags__list').querySelector('.tags__button').classList.remove('tags__button_active');
    }
    button.classList.toggle('tags__button_active');
    toggleTag(tag.id);
  }

  return (
    <li className="tags__list-item">
      <button onClick={onClick} className="button tags__button" type="button">{tag.name}</button>
    </li>
  );
}

Tag.propTypes = {
  tag: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
  toggleTag: PropTypes.func.isRequired,
};
