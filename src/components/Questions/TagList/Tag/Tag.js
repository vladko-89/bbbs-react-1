import React from 'react';
import PropTypes from 'prop-types';

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
    <li className="tags__list-item">
      <button onClick={handleClick} className={`button tags__button${active && (name !== 'Все') ? ' tags__button_active' : ''}`} type="button">{name}</button>
    </li>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  selectRubric: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
