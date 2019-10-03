import React from "react";
import NameForm from "./components/Weight_entry";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="Main Page" class="container">
      <Header />
      <NameForm />
    </div>
  );
}

export default App;
