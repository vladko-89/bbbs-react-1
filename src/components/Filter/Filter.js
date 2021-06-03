import React from 'react';
import PropTypes from 'prop-types';

import FilterItem from '../FilterItem/FilterItem';

function Filter({
  array,
  arraySecond,
  onActive,
}) {
  const [activeFilter, setActiveFilter] = React.useState('');

  function onFilterChange(filter) {
    setActiveFilter(filter);
  }
  return (
    <div className="tags">
      <ul className="tags__list">
        {
          array.map((item, i) => (
            <FilterItem
              value={item}
              activeFilter={activeFilter}
              onFilterChange={onFilterChange}
              onActive={onActive}
              key={i.toString()}
            />
          ))
        }
      </ul>
      <ul className="tags__list">
        {
          arraySecond?.map((item, i) => (
            <FilterItem
              value={item}
              activeFilter={activeFilter}
              onFilterChange={onFilterChange}
              onActive={onActive}
              key={i.toString()}
            />
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
