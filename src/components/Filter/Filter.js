import React from 'react';
import PropTypes from 'prop-types';

import FilterItem from '../FilterItem/FilterItem';

function Filter({
  array,
}) {
  return (
    <div className="tags">
      <ul className="tags__list">
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
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;
