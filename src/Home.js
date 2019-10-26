import React from "react";
import Header from "./components/Header";
import NameForm from "./components/Weight_entry";
import "./App.css";
import { Container } from "react-bootstrap";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <NameForm />
      </Container>
    );
  }
}
