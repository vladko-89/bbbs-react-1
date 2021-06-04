import PropTypes from 'prop-types';
import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, isFixed, onLoginPopup }) {
  const [mobMenu, setMobMenu] = React.useState(false);
  const handleClickMobMenu = (e) => {
    if (e.target.closest('.menu__burger')) {
      setMobMenu(!mobMenu);
    }
  };
  return (
    <header className={`header ${isFixed ? 'header_fixed' : ''} page__section ${mobMenu ? 'header_displayed ' : ''}`}>
      <Navigation
        mobMenu={mobMenu}
        handleClickMobMenu={handleClickMobMenu}
        loggedIn={loggedIn}
        onLoginPopup={onLoginPopup}
      />
    </header>
  );
}
Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired,
  onLoginPopup: PropTypes.func.isRequired,
};

export default Header;
