import React from "react";
import Header from "./components/Header";
import NameForm from "./components/Weight_entry";
import "./App.css";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NameForm />
      </div>
    );
  }
}
