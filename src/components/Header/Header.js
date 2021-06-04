import PropTypes from 'prop-types';
import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, isFixed }) {
  const [mobMenu, setMobMenu] = React.useState(false);
  const handleClicMobMenu = (e) => {
    if (e.target.closest('.menu__burger')) {
      setMobMenu(!mobMenu);
    }
  };
  return (
    <header className={`header ${isFixed ? 'header_fixed' : ''} page__section ${mobMenu ? 'header_displayed ' : ''}`}>
      <Navigation
        mobMenu={mobMenu}
        handleClickMobMenu={handleClicMobMenu}
        loggedIn={loggedIn}
      />
    </header>
  );
}
Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired,
};

export default Header;
