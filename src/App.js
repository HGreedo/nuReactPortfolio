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

          <Route exact path={["/api/brands/"]}>
            <AboutMe/>
          </Route>

          <Route exact path={["/api/brands/nameSort"]}>
          </Route>

          <Route exact path="/api/brandindex/profile">
            <IdaShop />
          </Route>

          <Route exact path="/api/brands/sign-up">
            < Resume />
          </Route>

          < Route exact path="/api/brands/login">
            <ThirdPtyLinks />
          </Route>
      </Switch>
    </Router>

  );
}
 
export default App;
