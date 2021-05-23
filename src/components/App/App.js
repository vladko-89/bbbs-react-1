
import './App.scss';
import Header from '../Header/Header';
import React from "react";

function App() {
const [loggedIn, setLoggedIn] = React.useState(false)
  return (
    <div className="App">
      <Header loggedIn={loggedIn}/>
    </div>
  );
}

export default App;
