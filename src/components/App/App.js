//import './App.scss';
import { Helmet } from "react-helmet";
import Main from '../Main/Main'

function App() {
  return (
    <div className="app page">
      <Helmet>
        <title>Старшие братья и сестры</title>
      </Helmet>
      <Main/>
    </div>
  );
}

export default App;
