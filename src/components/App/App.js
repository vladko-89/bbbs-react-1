import logo from './logo.svg';
import './App.scss';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header loggedIn={'true'}/>
    </div>
  );
}

export default App;
