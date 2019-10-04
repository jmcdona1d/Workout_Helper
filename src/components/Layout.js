import React from "react";
import { Container } from "react-bootstrap";

export default class Layout extends React.Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}
