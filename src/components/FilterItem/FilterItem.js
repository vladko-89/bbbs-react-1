import PropTypes from 'prop-types';
import React from 'react';

function FilterItem({
  value
}) {
  return (
    <li class="tags__list-item">
      <button class="button tags__button tags__button_active" type="button">
        {value}
      </button>
    </li>
  );
}

FilterItem.propTypes = {
  value: PropTypes.string.isRequired,
}

export default FilterItem;