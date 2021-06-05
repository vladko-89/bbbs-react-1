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
import Catalog from '../Catalog/Catalog';
import Articles from '../Articles/Articles';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(true);


  const [activeRubrics, setActiveRubrics] = React.useState([]);

  const [isFixed, setIsFixed] = React.useState(false);

  function changeActiveRubric(rubric, active) {
    if (rubric === 'All') {
      setActiveRubrics([]);
    } else if (!active) {
      setActiveRubrics([...activeRubrics, rubric]);
    } else {
      setActiveRubrics(activeRubrics.filter((item) => item !== rubric));
    }
  }

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

  const handleOutClick = () => {
    setLoggedIn(false);
    // eslint-disable-next-line no-console
    console.log('удалить токен из хранилища');
  };
  return (
    <HelmetProvider>
      <div className="app page">
        <Helmet>
          <title>Старшие братья и сестры</title>
        </Helmet>
        <Header
          loggedIn={loggedIn}
          isFixed={isFixed}
        />
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
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
          <Route exact path="/catalog">
            <Catalog />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
        </Switch>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
