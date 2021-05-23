import React from 'react';
import PropTypes from 'prop-types';

function MainAnnotation(props) {
  const paragraphs = props.description.split("\n");
  return (
    <div className="card card_content_annotation card_type_main">
      <div className="card__content">
        <p className="caption card__annotation-caption">{props.info}</p>
        <div className="card__annotation card__annotation_position_main-card">
          {paragraphs.map((paragraph, index) => (
            <p className="paragraph card__paragraph" key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

MainAnnotation.propTypes = {
  info: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
MainAnnotation.defaultProps = {
  info: 'Инфо текст',
  description: 'Текст описания',
};

export default MainAnnotation