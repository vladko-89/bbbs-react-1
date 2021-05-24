import React from 'react';
import PropTypes from 'prop-types';

import FilterItem from '../FilterItem/FilterItem';

function Filter({
  array,
  arraySecond,
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
      <ul className="tags__list">
        {
          arraySecond.map((item) => (
            <FilterItem value={item} />
          ))
        }
      </ul>
    </div>
  );
}

Filter.propTypes = {
  array: PropTypes.arrayOf.isRequired,
  arraySecond: PropTypes.arrayOf.isRequired,
};

export default Filter;
