import React from 'react';
import PropTypes from 'prop-types';

function MainTittle({
  title,
}) {
  return (
    <h1 className="main-title">
      {title}
    </h1>
  );
}

MainTittle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainTittle;
