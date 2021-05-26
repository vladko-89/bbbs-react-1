import PropTypes from 'prop-types';
import React from 'react';

function FilterItem({
  value,
  onActive,
}) {
  const [active, setActive] = React.useState(false);

  function handleClick() {
    setActive(!active);
    onActive(value);
  }
  return (
    <li className="tags__list-item">
      <button className={`button tags__button ${active ? 'tags__button_active' : ''}`} type="button" onClick={handleClick}>
        {value}
      </button>
    </li>
  );
}

FilterItem.propTypes = {
  value: PropTypes.string.isRequired,
  onActive: PropTypes.func.isRequired,
};

export default FilterItem;
