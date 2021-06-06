import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag/Tag';

import { tags } from '../../../utils/questionsData';

export default function TagList({ selectRubric }) {
  const [activeFilter, setActiveFilter] = React.useState('');

  function onFilterChange(tag) {
    setActiveFilter(tag);
  }

  return (
    <div className="tags tags_content_long-list">
      <ul className="tags__list tags__list_type_long">
        {
          tags.map((tag, i) => (
            <Tag
              key={i.toString()}
              isActive={i === 0}
              name={tag}
              selectRubric={selectRubric}
              onFilterChange={onFilterChange}
              activeFilter={activeFilter}
            />
          ))
        }
      </ul>
    </div>
  );
}

TagList.propTypes = {
  selectRubric: PropTypes.func.isRequired,
};
