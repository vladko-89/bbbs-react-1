import React from 'react';
import PropTypes from 'prop-types';

import FilterItem from '../FilterItem/FilterItem';

function Filter({
  array,
  onActive,
  selectRubric,
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
              value={item.name}
              tag={item.slug}
              activeFilter={activeFilter}
              onFilterChange={onFilterChange}
              onActive={onActive}
              selectRubric={selectRubric}
              key={((n) => n + 1)(i)}

            />
          ))
        }
      </ul>
    </div>
  );
}

Filter.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectRubric: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
};
export default Filter;
