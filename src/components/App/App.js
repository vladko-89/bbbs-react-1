import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { compareAsc, parseISO } from 'date-fns';
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

  // Probally we need a check token on a backend side before manipulation.
  React.useEffect(() => {
    if (localStorage.getItem('bbbs-token')) {
      const tokenData = JSON.parse(localStorage.getItem('bbbs-token'));
      if (compareAsc(parseISO(tokenData.accessExpire), new Date()) === 1) {
        api.getCurrentUser(tokenData.access)
          .then((res) => { setCurrentUser(res.name); setLoggedIn(true); })
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err));
      } else if (compareAsc(parseISO(tokenData.refreshExpire), new Date()) === 1) {
        api.updateToken(tokenData.refresh)
          .then((res) => localStorage.setItem('bbbs-token', JSON.stringify(res)))
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err));
      }
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
    localStorage.removeItem('bbbs-token');
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
