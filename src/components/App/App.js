import { Route } from 'react-router-dom';
import './App.css';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';

function App() {
  return (

    <div className="app page">
      <Route path="/about">
        <AboutUs />
      </Route>
      <Footer />

    </div>
  );
}

export default App;
