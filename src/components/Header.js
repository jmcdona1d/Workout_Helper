import React from "react";
import { Nav, Navbar, NavbarBrand} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const Styles = styled.div`
  .navbar {
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

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Styles>
          <Navbar expand="lg">
            <NavbarBrand href="/">
              <h2 className="h2-coloured">5/3/1 Workout Planner</h2>
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/About">About</Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles>
      </React.Fragment>
    );
  }
}
