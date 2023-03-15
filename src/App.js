
import {Route,BrowserRouter as Router,Routes} from "react-router-dom"
import Home from './pages/home';
import Success from "./pages/success";
// import { useState } from 'react';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  );
}

export default App;
