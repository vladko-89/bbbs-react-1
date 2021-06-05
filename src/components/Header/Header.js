import PropTypes from 'prop-types';
import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const [mobMenu, setMobMenu] = React.useState(false);
  const [isFixed, setIsFixed] = React.useState(false);
  React.useEffect(() => {
    let current = 0;
    const checkScroll = () => {
      if (window.pageYOffset < current && window.pageYOffset > 30) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
      current = window.pageYOffset;
    };
    document.addEventListener('scroll', checkScroll);

    return (() => document.removeEventListener('scroll', checkScroll));
  }, []);
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
};

export default Header;
