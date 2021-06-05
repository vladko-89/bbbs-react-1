/* eslint-disable max-len */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Places from '../Places/Places';
import Calendar from '../Calendar/Calendar';
import Profile from '../Profile/Profile';
import Questions from '../Questions/Questions';
import Video from '../Video/Video';
import PopupLogin from '../PopupLogin/PopupLogin';
import CurrentUserContext from '../../contexts/CurrentUser';
import api from '../../utils/Api';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');
  const [isPopupLoginOpened, setIsPoupLoginOpened] = React.useState(false);
  const [isFixedHeader, setIsFixedHeader] = React.useState(false);

  React.useEffect(() => {
    let current = 0;
    const checkScroll = () => {
      if (window.pageYOffset < current && window.pageYOffset > 30) {
        setIsFixedHeader(true);
      } else {
        setIsFixedHeader(false);
      }
      current = window.pageYOffset;
    };
    document.addEventListener('scroll', checkScroll);

    return (() => document.removeEventListener('scroll', checkScroll));
  }, []);

  // Here will be another logic. We need a expiration of access and refresh token from backend.
  React.useEffect(() => {
    const savedAccessToken = localStorage.getItem('bbbs-access');
    if (savedAccessToken) {
      api.checkToken(savedAccessToken)
        .then((res) => { if (res.access === savedAccessToken) { setLoggedIn(true); } });
    }
  }, []);

  const handleLoginOpen = () => {
    setIsPoupLoginOpened(true);
  };
  const handleLoginClose = (evt) => {
    if (evt.key === 'Escape' || evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup__enter')) {
      setIsPoupLoginOpened(false);
    }
  };

  const handleLoginSubmit = (evt, userName) => {
    evt.preventDefault();
    setLoggedIn(true);
    setCurrentUser(userName);
  };

  const handleOutClick = () => {
    localStorage.removeItem('bbbs-access');
    localStorage.removeItem('bbbs-refresh');
    setLoggedIn(false);
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <HelmetProvider>
        <div className="app page">
          <Helmet>
            <title>Старшие братья и сестры</title>
          </Helmet>
          <Header
            loggedIn={loggedIn}
            isFixed={isFixedHeader}
            onLoginPopup={handleLoginOpen}
          />
          <Switch>
            <Route exact path="/">
              <Main loggedIn={loggedIn} />
            </Route>
            <Route exact path="/place">
              <Places />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/calendar">
              <Calendar />
            </Route>
            <Route exact path="/questions">
              <Questions loggedIn={loggedIn} />
            </Route>
            <Route exact path="/profile">
              <Profile onOutClick={handleOutClick} />
            </Route>
            <Route exact path="/video">
              <Video />
            </Route>
          </Switch>
          <Footer />
          { isPopupLoginOpened ? <PopupLogin onClose={handleLoginClose} onSubmit={handleLoginSubmit} isOpen={isPopupLoginOpened} /> : ''}
        </div>
      </HelmetProvider>
    </CurrentUserContext.Provider>
  );
}

export default App;
