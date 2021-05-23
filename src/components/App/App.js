import { Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Main from '../Main/Main'
function App() {
  return (
    <HelmetProvider>
      <div className="app page">
        <Helmet>
          <title>Старшие братья и сестры</title>
        </Helmet>
        <Main />
        <Route path="/about">
          <AboutUs />
        </Route>
        <Footer />
      </div>
    </HelmetProvider>
  )
};

export default App;