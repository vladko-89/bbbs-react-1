import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tag.module.scss';

export default function Tag({ name }) {
  return (
    <li className={styles['tags__list-item']}>
      <button className={`${styles.button} ${styles.tags__button}`} type="button">{name}</button>
    </li>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};
