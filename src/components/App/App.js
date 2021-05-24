import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <HelmetProvider>
      <div className="app page">
        <Helmet>
          <title>Старшие братья и сестры</title>
        </Helmet>
        <Header loggedIn={loggedIn} />
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
