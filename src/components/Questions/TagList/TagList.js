import React from 'react';
import Tag from './Tag/Tag';

import { tags } from '../../../utils/questionsData';

export default function TagList() {
  return (
    <div className="tags tags_content_long-list">
      <ul className="tags__list tags__list_type_long">
        {
          tags.map((tag, i) => <Tag key={i.toString()} isActive={i === 0} name={tag} />)
        }
      </ul>
    </div>
  );
}
