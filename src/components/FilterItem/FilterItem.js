import PropTypes from 'prop-types';
import React from 'react';

function FilterItem({
  value,
}) {
  return (
    <li className="tags__list-item">
      <button className="button tags__button tags__button_active" type="button">
        {value}
      </button>
    </li>
  );
}

FilterItem.propTypes = {
  value: PropTypes.string.isRequired,
};

export default FilterItem;
