import React from "react";

export default class Layout extends React.Component {
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
