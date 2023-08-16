import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from './pages/mainpage';
import Detailspage from './pages/detailspage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Mainpage />} />
          <Route path="/details" exact element={<Detailspage />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
