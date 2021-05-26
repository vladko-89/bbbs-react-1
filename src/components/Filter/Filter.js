import React from 'react';
import PropTypes from 'prop-types';

import FilterItem from '../FilterItem/FilterItem';

function Filter({
  array,
  arraySecond,
  onActive,
}) {
  return (
    <div className="tags">
      <ul className="tags__list">
        {
          array.map((item) => (
            <FilterItem value={item} onActive={onActive} />
          ))
        }
      </ul>
      <ul className="tags__list">
        {
          arraySecond?.map((item) => (
            <FilterItem value={item} />
          ))
        }
      </ul>
    </div>
  );
}

Filter.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
  arraySecond: PropTypes.arrayOf(PropTypes.string, PropTypes.null),
  onActive: PropTypes.func.isRequired,
};
Filter.defaultProps = {
  arraySecond: [],
};
export default Filter;
