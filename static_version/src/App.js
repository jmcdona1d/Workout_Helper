import React from "react";
import NavBar from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import Layout from "./components/Layout";
import Jumbotron from "./components/Jumbotron";
import Background from "./resources/pattern_background.png";
//<a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by starline - www.freepik.com</a>
import styled from "styled-components";
import BotJumbo from "./components/BottomJumbo";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container
      fluid={true}
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0
      }}
    >
      <div className="globalMain" />
      <div>
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
          <BotJumbo />
        </Layout>
      </div>
    </Container>
  );
}

export default App;
