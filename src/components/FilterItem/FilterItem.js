/* eslint-disable eqeqeq */
import PropTypes from 'prop-types';
import React from 'react';

function FilterItem({
  value,
  tag,
  activeFilter,
  onFilterChange,
  onActive,
  selectRubric,
}) {
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    if (activeFilter !== value) { setActive(false); }
  });
  function handleClick() {
    if (active) { onActive(null); } else { onActive(value); }
    setActive(!active);
    onFilterChange(value);
    selectRubric(tag);
    if (active) {
      selectRubric('');
    }
  }
  return (
    <li className="tags__list-item">
      <button value={tag} className={`button tags__button ${active ? 'tags__button_active' : ''}`} type="button" onClick={handleClick}>
        {value}
      </button>
    </li>
  );
}

FilterItem.propTypes = {
  value: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
  selectRubric: PropTypes.func.isRequired,
};

export default FilterItem;
