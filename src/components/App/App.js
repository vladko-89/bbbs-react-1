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
import Catalog from '../Catalog/Catalog';
import Articles from '../Articles/Articles';
import Films from '../Films/Films';
import Books from '../Books/Books';
import Stories from '../Stories/Stories';
import PopupLogin from '../PopupLogin/PopupLogin';
import Rights from '../Rights/Rights';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUser';
import PopupCities from '../PopupCities/PopupCities';
import { useAuth } from '../../utils/utils';
import api from '../../utils/Api';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [activeRubrics, setActiveRubrics] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isPopupLoginOpened, setIsPopupLoginOpened] = React.useState(false);
  const [isOpenPopupCities, setIsOpenPopupCities] = React.useState(false);
  const [citiesList, setCitiesList] = React.useState([]);

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
    useAuth(setCurrentUser, setLoggedIn);
    // запрос за списком городов
    api
      .getCitiesList()
      .then((data) => {
        setCitiesList(data.results);
        localStorage.setItem('citiesList', JSON.stringify(data.results));
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);

  // попап городов -смена города
  const handleChangeCityClick = () => {
    setIsOpenPopupCities(true);
  };

  // закрытие попапа городов
  const handleClose = (event) => {
    if (
      event.key === 'Escape' || event.target.classList.contains('popup_opened')
    ) {
      setIsOpenPopupCities(false);
    }
    setIsOpenPopupCities(false);
  };
  // изменение города в профиле пользователя
  const handleChangeCity = (place) => {
    // eslint-disable-next-line no-console
    console.log(`city changed on ${place}`);
    const cityId = citiesList.find((el) => el.name === place);
    api.updateUserInfo({ city: cityId })
      .then((res) => {
        setCurrentUser(res);
        localStorage.setItem('user', JSON.stringify(res));
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };

  const handleLoginOpen = () => {
    setIsPopupLoginOpened(true);
  };
  const handleLoginClose = (evt) => {
    if (
      evt.key === 'Escape' || evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup__enter')
    ) {
      setIsPopupLoginOpened(false);
    }
  };

  const handleLoginSubmit = (evt, userInfo) => {
    evt.preventDefault();
    setLoggedIn(true);
    setCurrentUser(userInfo);
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
            user={currentUser}
            onLogOutClick={handleOutClick}
            onChangeCityClick={handleChangeCityClick}
          />
          <div className="page__content">
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

              <ProtectedRoute
                exact
                path="/calendar"
                loggedIn={loggedIn}
                activeRubrics={activeRubrics}
                selectRubric={changeActiveRubric}
                component={Calendar}
              />
              <Route exact path="/questions">
                <Questions
                  loggedIn={loggedIn}
                  activeRubrics={activeRubrics}
                  selectRubric={changeActiveRubric}
                />
              </Route>
              <ProtectedRoute
                exact
                path="/profile"
                onOutClick={handleOutClick}
                loggedIn={loggedIn}
                component={Profile}
              />
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
              <Route exact path="/stories">
                <Stories />
              </Route>
            </Switch>
          </div>
          <Footer />
          {isPopupLoginOpened ? (
            <PopupLogin
              onClose={handleLoginClose}
              onSubmit={handleLoginSubmit}
              isOpen={isPopupLoginOpened}
            />
          ) : (
            ''
          )}
          {{ isOpenPopupCities } && (
            <PopupCities
              onChangeCities={handleChangeCity}
              onCloseClick={handleClose}
              isOpen={isOpenPopupCities}
              isCity={currentUser.city}
              citiesList={citiesList}
            />
          )}
        </div>
      </HelmetProvider>
    </CurrentUserContext.Provider>
  );
}

export default App;
