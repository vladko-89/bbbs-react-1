import React from 'react';
import PropTypes from 'prop-types';

function CardCaption({
  textCaption,
}) {
  return (
    <p className="caption card__annotation-caption">
      {textCaption}

    </p>
  );
}

CardCaption.defaultProps = {
  textCaption: '',
};

CardCaption.propTypes = {
  textCaption: PropTypes.string,
};

export default CardCaption;
