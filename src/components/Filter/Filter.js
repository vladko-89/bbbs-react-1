import React from 'react';
import PropTypes from 'prop-types';

import FilterItem from '../FilterItem/FilterItem';

function Filter({
  array,
}) {
  return (
    <div class="tags">
      <ul class="tags__list">
        {
          array.map((item) => (
            <FilterItem value={item} />
          ))
        }
      </ul>
    </div>
  );
}

Filter.propTypes = {
  array: PropTypes.array.isRequired,
}

export default Filter;