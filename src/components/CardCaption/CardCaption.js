import React from 'react';
import PropTypes from 'prop-types';

function CardCaption({
  captionText
}) {
  return (
    <p class="caption card__annotation-caption">
      {captionText}
    </p>
  );
}

CardCaption.propTypes = {
  captionText: PropTypes.string.isRequired,
}

export default CardCaption;