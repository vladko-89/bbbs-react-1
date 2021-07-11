import React from 'react';
import PropTypes from 'prop-types';

import CalendarFilterItem from '../CalendarFilterItem/CalendarFilterItem';

function CalendarFilter({
  array,
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
          array.map((item) => (
            <CalendarFilterItem
              value={item.name}
              tag={item.id}
              activeFilter={activeFilter}
              onFilterChange={onFilterChange}
              selectRubric={selectRubric}
              key={item.id}

            />
          ))
        }
      </ul>
    </div>
  );
}

CalendarFilter.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectRubric: PropTypes.func.isRequired,
};
export default CalendarFilter;
