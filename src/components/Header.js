import React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
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
      <Styles>
        <Navbar expand="lg">
          <NavbarBrand href="/">
            <h2 className="h2-coloured">5/3/1 Workout Planer</h2>
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
    );
  }
}

// export default class Header extends React.Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="/">
//           <h2>5/3/1 Workout Planner</h2>
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="/">
//                 Home <span className="sr-only">(current)</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">
//                 About
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }
