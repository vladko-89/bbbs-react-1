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

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(true);

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
        <Header loggedIn={loggedIn} />
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
        </Switch>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
