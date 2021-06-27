import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tag.module.scss';

export default function Tag({
  name,
  onFilterChange,
  activeFilter,
  selectRubric,
}) {
  const [active, setActive] = React.useState(false);

  function handleClick() {
    setActive(!active);
    onFilterChange(name);
    selectRubric(name, active);
    if (active) {
      selectRubric(name, true);
    }
  }

  React.useEffect(() => {
    if (activeFilter === 'Все') {
      setActive(false);
    }
  }, [activeFilter]);

  return (
    <li className={styles['tags__list-item']}>
      <button onClick={handleClick} className={`${styles.button} ${styles.tags__button}${active && (name !== 'Все') ? ` ${styles.tags__button_active}` : ''}`} type="button">{name}</button>
    </li>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  selectRubric: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
