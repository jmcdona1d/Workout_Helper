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

const Styles = styled.div`
  .globalMain {
    background: url(${Background}) no-repeat fixed bottom;
    background-color: #000;
    background-size: cover;
    color: #ccc;
    position: relative;
    z-index: -50;
  }
`;

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
      <Styles>
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
              <BotJumbo />
            </Router>
          </Layout>
        </div>
      </Styles>
    </Container>
  );
}

export default App;
