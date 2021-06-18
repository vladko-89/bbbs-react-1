import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag/Tag';

export default function TagList({ tags, selectRubric }) {
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
              key={tag.id}
              isActive={i === 0}
              name={tag.name}
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
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
  })).isRequired,
  selectRubric: PropTypes.func.isRequired,
};
