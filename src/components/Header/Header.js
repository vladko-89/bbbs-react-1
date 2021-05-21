import './Header.scss';

import PropTypes from 'prop-types';
import Navigation from "../Navigation/Navigation";

import React from "react";

function Header(props) {
  const [mobMenu, setMobMenu] = React.useState(false);
  const handleClicMobMenu = (e) => {
    if (e.target.closest('.menu__burger')) {
      setMobMenu(!mobMenu)
    }
  };
  return (
    <header className={`header page__section ${mobMenu? 'header_displayed ':''}`}>
      <Navigation mobMenu = {mobMenu}  handleClicMobMenu={handleClicMobMenu} loggedIn={props.loggedIn}/>
    </header>
  )
}
Header.propTypes = {
  loggedIn: PropTypes.bool,
}


  export default Header;
