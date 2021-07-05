import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tag.module.scss';

export default function Tag({ tag, handleTagClick }) {
  const tagElement = React.useRef(null);

  function onClick() {
    const isActive = tagElement.current.classList.contains(styles.tags__button_active);
    const firstTag = tagElement.current.parentNode.parentNode.querySelector(`.${styles.tags__button}`);
    const activeTags = tagElement.current.parentNode.parentNode.querySelectorAll(`.${styles.tags__button_active}`);

    if (tag.id === 0) {
      if (!isActive) {
        activeTags.forEach((t) => t.classList.remove(styles.tags__button_active));
        tagElement.current.classList.toggle(styles.tags__button_active);
      }
    } else {
      if (activeTags.length === 1 && isActive) {
        firstTag.classList.add(styles.tags__button_active);
      } else {
        firstTag.classList.remove(styles.tags__button_active);
      }
      tagElement.current.classList.toggle(styles.tags__button_active);
    }

    handleTagClick(tag.id);
  }

  React.useEffect(() => {
    if (tag.id === 0) tagElement.current.classList.add(styles.tags__button_active);
  }, []);

  return (
    <li className={styles['tags__list-item']}>
      <button ref={tagElement} onClick={onClick} className={`${styles.button} ${styles.tags__button}`} type="button">{tag.name}</button>
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
