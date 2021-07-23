import './App.css';
import Nav from './components/Nav';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About-Me";
import IdaShop from "./pages/IdaShop";
import Resume from "./pages/Resume";
import ThirdPtyLinks from "./pages/ThirdPtyLinks";

function App() {
  return (
    <Router> 
      <Nav />
      <Switch>
        <Route to="/">
          <Home />
        </Route>

          <Route to="/About-Me">
            <About/>
          </Route>

          <Route to="/IdaAnderssonShop">
            <IdaShop />
          </Route>

          <Route to="/Resume">
            < Resume />
          </Route>

          < Route to="/Links">
            <ThirdPtyLinks />
          </Route>
      </Switch>
    </Router>

  );
}
 
export default App;
