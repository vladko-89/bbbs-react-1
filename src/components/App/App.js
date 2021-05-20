//import './App.scss';
import { Helmet, HelmetProvider  } from "react-helmet-async";
import Main from '../Main/Main'

function App() {
  return (
    <HelmetProvider>
    <div className="app page">
      <Helmet>
        <title>Старшие братья и сестры</title>
      </Helmet>
      <Main/>
    </div>
    </HelmetProvider>
  );
}

export default App;
