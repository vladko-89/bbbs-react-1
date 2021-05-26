import PropTypes from 'prop-types';
import React from 'react';

function FilterItem({
  value,
  key,
  onActive,
}) {
  const [active, setActive] = React.useState(false);

  function handleClick() {
    setActive(!active);
    onActive(value);
  }
  return (
    <li className="tags__list-item" key={key}>
      <button className={`button tags__button ${active ? 'tags__button_active' : ''}`} type="button" onClick={handleClick}>
        {value}
      </button>
    </li>
  );
}

FilterItem.propTypes = {
  value: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
  onActive: PropTypes.func.isRequired,
};

export default FilterItem;
