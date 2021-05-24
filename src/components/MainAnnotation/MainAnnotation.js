import React from 'react';
import PropTypes from 'prop-types';

function MainAnnotation({ description, info }) {
  const paragraphs = description.split('\n');
  return (
    <div className="card card_content_annotation card_type_main">
      <div className="card__content">
        <p className="caption card__annotation-caption">{info}</p>
        <div className="card__annotation card__annotation_position_main-card">
          {paragraphs.map((paragraph, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p className="paragraph card__paragraph" key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

MainAnnotation.propTypes = {
  info: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MainAnnotation;
