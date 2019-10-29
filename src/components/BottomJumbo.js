import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import deadlift from "../resources/Deadlift_pic.jpg";
import "../App.css";
import { Navbar } from "react-bootstrap";

const Styles = styled.div`
  .BotJumbo {
    background-color: #752;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export default class BotJumbo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Styles>
          <Navbar fluid className="BotJumbo">
            <Container className="BotJumbo-title">
              <h8 className="h5-coloured">
                <i>
                  "The Simplest and Most Effective Training System to Build Raw
                  Strength"
                </i>{" "}
                - Jim wendler
              </h8>
            </Container>
          </Navbar>
        </Styles>
      </React.Fragment>
    );
  }
}
