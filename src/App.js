import './App.css';
import Nav from './components/Nav';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/About-Me";
import IdaShop from "./pages/IdaShop";
import Resume from "./pages/Resume";
import ThirdPtyLinks from "./pages/ThirdPtyLinks";

function App() {
  return (
    <Router> 
      <Nav />
      <Switch>
        <Route exact path={["/"]}>
          <Home />
        </Route>

          <Route to="/pages/About-Me">
            <AboutMe/>
          </Route>

          <Route to="/IdaShop">
            <IdaShop />
          </Route>

          <Route to="/Resume">
            < Resume />
          </Route>

          < Route to="/ThirdPtyLinks">
            <ThirdPtyLinks />
          </Route>
      </Switch>
    </Router>

  );
}
 
export default App;
