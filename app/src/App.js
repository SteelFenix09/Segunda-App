import './App.css';
import { BrowserRouter as Router } from "react-router-dom"

import Rutas from './Router/Rutas';

function App() {
  return (
    <Router>
      <div>
        <Rutas />
      </div>
    </Router>
  );
}

export default App;
