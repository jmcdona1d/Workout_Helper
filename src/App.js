import React from "react";
import NameForm from "./components/Weight_entry";
import NavBar from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import Layout from "./components/Layout";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        zindex: -5
      }}
    >
      <Layout>
        <Router>
          <NavBar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
