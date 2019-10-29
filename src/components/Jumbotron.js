import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import deadlift from "../resources/Deadlift_pic.jpg";
import "../App.css";

const Styles = styled.div`
  .jumbotron {
    background: url(${deadlift}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: 1;
  }

  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
`;

export default class Jumbotron extends React.Component {
  render() {
    return (
      <Container fluid="true">
        <Styles>
          <Jumbo fluid className="jumbo">
            <div className="overlay" />
            <Container fluid="true" className="Jumbotron-title">
              <h3>Welcome to the workout planner</h3>
              <p>Brace yourself for max gainz</p>
            </Container>
          </Jumbo>
        </Styles>
      </Container>
    );
  }
}
