import logo from './logo.svg';
import { Link, Route } from 'react-router-dom';
import './App.css';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App page">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Route path="/about">
        <AboutUs />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
