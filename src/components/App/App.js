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
import Catalog from '../Catalog/Catalog';
import Articles from '../Articles/Articles';
import Films from '../Films/Films';
import Books from '../Books/Books';
import PopupLogin from '../PopupLogin/PopupLogin';
import Rights from '../Rights/Rights';
import CurrentUserContext from '../../contexts/CurrentUser';
import api from '../../utils/Api';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [activeRubrics, setActiveRubrics] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState('');
  const [isPopupLoginOpened, setIsPoupLoginOpened] = React.useState(false);

  // Отслеживаем активные фильтры в компонентах
  function changeActiveRubric(rubric, active) {
    if (rubric === 'All' || rubric === 'Все') {
      setActiveRubrics([]);
    } else if (!active) {
      setActiveRubrics([...activeRubrics, rubric]);
    } else {
      setActiveRubrics(activeRubrics.filter((item) => item !== rubric));
    }
  }

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
            onLoginPopup={handleLoginOpen}
          />
          <Switch>
            <Route exact path="/">
              <Main
                loggedIn={loggedIn}
                activeRubrics={activeRubrics}
                selectRubric={changeActiveRubric}
              />
            </Route>
            <Route exact path="/place">
              <Places
                activeRubrics={activeRubrics}
                selectRubric={changeActiveRubric}
              />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/calendar">
              <Calendar
                activeRubrics={activeRubrics}
                selectRubric={changeActiveRubric}
              />
            </Route>
            <Route exact path="/questions">
              <Questions
                loggedIn={loggedIn}
                activeRubrics={activeRubrics}
                selectRubric={changeActiveRubric}
              />
            </Route>
            <Route exact path="/profile">
              <Profile onOutClick={handleOutClick} />
            </Route>
            <Route exact path="/video">
              <Video
                activeRubrics={activeRubrics}
                selectRubric={changeActiveRubric}
              />
            </Route>
            <Route exact path="/catalog">
              <Catalog />
            </Route>
            <Route exact path="/rights">
              <Rights
                activeRubrics={activeRubrics}
                selectRubric={changeActiveRubric}
              />
            </Route>
            <Route exact path="/articles">
              <Articles />
            </Route>
            <Route exact path="/films">
              <Films />
            </Route>
            <Route exact path="/books">
              <Books />
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
