import React from 'react';
import PropTypes from 'prop-types';

function CardCaption({
  info,
}) {
  return (
    <p className="caption card__annotation-caption">
      {info}

    </p>
  );
}

CardCaption.propTypes = {
  info: PropTypes.string.isRequired,
};

export default CardCaption;
