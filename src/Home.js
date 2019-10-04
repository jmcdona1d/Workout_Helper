import React from "react";
import Header from "./components/Header";
import NameForm from "./components/Weight_entry";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <div id="hero-overlay" /> */}
        <NameForm />
      </div>
    );
  }
}
