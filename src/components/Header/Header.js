import PropTypes from 'prop-types';
import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header({
  loggedIn,
  onLoginPopup,
  user,
  onLogOutClick,
  onChangeCityClick,
}) {
  const [mobMenu, setMobMenu] = React.useState(false);
  const [isFixed, setIsFixed] = React.useState(false);
  React.useEffect(() => {
    let current = 0;
    const checkScroll = () => {
      setIsFixed(window.pageYOffset < current && window.pageYOffset > 30);
      current = window.pageYOffset;
    };
    document.addEventListener('scroll', checkScroll);

    return () => document.removeEventListener('scroll', checkScroll);
  }, []);
  const handleClickMobMenu = (e) => {
    if (e.target.closest('.menu__burger')) {
      setMobMenu(!mobMenu);
    }
  };
  return (
    <header
      className={`header ${isFixed ? 'header_fixed' : ''} page__section ${
        mobMenu ? 'header_displayed ' : ''
      }`}
    >
      <Navigation
        mobMenu={mobMenu}
        handleClickMobMenu={handleClickMobMenu}
        loggedIn={loggedIn}
        onLoginPopup={onLoginPopup}
        userInfo={user}
        onLogOutClick={onLogOutClick}
        onChangeCityClick={onChangeCityClick}
      />
    </header>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onLoginPopup: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.number,
    city: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isPrimary: PropTypes.bool,
    }),
  }).isRequired,
  onLogOutClick: PropTypes.func.isRequired,
  onChangeCityClick: PropTypes.func.isRequired,
};

export default Header;
