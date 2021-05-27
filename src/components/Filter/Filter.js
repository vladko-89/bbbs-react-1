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
          array.map((item, i) => (
            <FilterItem value={item} onActive={onActive} key={((n) => n + 1)(i)} />
          ))
        }
      </ul>
      <ul className="tags__list">
        {
          arraySecond?.map((item, i) => (
            <FilterItem value={item} onActive={onActive} key={((n) => n + 1)(i)} />
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
