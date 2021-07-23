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
        <Route exact path={["/"]}>
          <Home />
        </Route>

          <Route exact path={["/pages/About-Me"]}>
            <About/>
          </Route>

          <Route exact path={["/pages/IdaShop"]}>
            <IdaShop />
          </Route>

          <Route exact path={["/pages/resume"]}>
            <Resume />
          </Route>

          < Route exact path={["/pages/ThirdPtyLinks"]}>
            <ThirdPtyLinks />
          </Route>
      </Switch>
    </Router>

  );
}
 
export default App;
