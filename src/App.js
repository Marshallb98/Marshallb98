import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/Footer"
import ProjectDisplay from "./pages/ProjectDisplay"
import Header from "./components/Header"
import Home from "./pages/Home"
import "./App.css";
function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
          <Route exact path= "/">
          <Home />
          </Route>
          <Route exact path="/projects">
          <ProjectDisplay />
          </Route>
          <Route exact path="/about">
            <Home />
          </Route>
        </Switch>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
