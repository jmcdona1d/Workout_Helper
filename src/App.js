import React from "react";
import NameForm from "./components/Weight_entry";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header id="header-style" />
      {/* <div id="hero-overlay" /> */}
      <NameForm className="hero" />
    </div>
  );
}

export default App;
