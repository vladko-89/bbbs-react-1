import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ tag, handleTagClick }) {
  const buttonElement = React.useRef(null);

  function onClick(event) {
    const button = event.target;
    const isActive = button.classList.contains('tags__button_active');
    const firstButton = button.closest('.tags__list').querySelector('.tags__button');
    const activeButtons = button.closest('.tags__list').querySelectorAll('.tags__button_active');

    if (tag.id === 0) {
      if (!button.classList.contains('tags__button_active')) {
        activeButtons.forEach((b) => b.classList.remove('tags__button_active'));
        button.classList.toggle('tags__button_active');
      }
    } else {
      if (activeButtons.length === 1 && isActive) {
        firstButton.classList.add('tags__button_active');
      } else {
        firstButton.classList.remove('tags__button_active');
      }
      button.classList.toggle('tags__button_active');
    }
    handleTagClick(tag.id);
  }

  React.useEffect(() => {
    if (tag.id === 0) buttonElement.current.classList.add('tags__button_active');
  }, []);

  return (
    <li className="tags__list-item">
      <button ref={buttonElement} onClick={onClick} className="button tags__button" type="button">{tag.name}</button>
    </li>
  );
}

Tag.propTypes = {
  tag: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
  handleTagClick: PropTypes.func.isRequired,
};
