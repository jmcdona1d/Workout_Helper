import React from "react";
import RepList from "./RepList";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuesEntered: false,
      dead: "",
      ohp: "",
      squat: "",
      bench: "",
      weekNum: 1,
      percentage1: 0.65
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeWeek = this.changeWeek.bind(this);
    this.editValues = this.editValues.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    if (
      this.state.dead === "" ||
      this.state.ohp === "" ||
      this.state.squat === "" ||
      this.state.bench === ""
    ) {
      alert("Fill in all boxes please");
      event.preventDefault();
    } else {
      this.setState({ valuesEntered: true });
      event.preventDefault();
    }
  }

  changeWeek(event) {
    var week = parseInt(this.state.weekNum) + 1;
    if (week === 5) {
      //control so weeks only go from 1 - 4
      week = 1;
    }

    switch (week) {
      case 1:
        this.setState({ percentage1: 0.65 });
        break;
      case 2:
        this.setState({ percentage1: 0.7 });
        break;
      case 3:
        this.setState({ percentage1: 0.75 });
        break;
      case 4:
        this.setState({ percentage1: 0.4 });
        break;
      default:
        this.setState({ percentage1: 0.65 });
    }
    this.setState({ weekNum: week });
  }

  editValues(event) {
    this.setState({ valuesEntered: false });
  }

  render() {
    if (!this.state.valuesEntered) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div class="row">
            <div class="col-md-2">
              <label>Deadlift: </label>
            </div>
            <div class="col-md-10">
              <input
                name="dead"
                type="number"
                value={this.state.dead}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label>Overhead Press:</label>
            </div>
            <div class="col-md-10">
              <input
                name="ohp"
                type="number"
                value={this.state.ohp}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label>Squat:</label>
            </div>
            <div class="col-md-10">
              <input
                name="squat"
                type="number"
                value={this.state.squat}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label>Bench Press:</label>
            </div>
            <div class="col-md-10">
              <input
                name="bench"
                type="number"
                value={this.state.bench}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      );
    } else {
      var Dead = parseInt(this.state.dead);
      var OHP = parseInt(this.state.ohp);
      var Squat = parseInt(this.state.squat);
      var Bench = parseInt(this.state.bench);

      return (
        <div>
          <h2>Weights for week {this.state.weekNum}:</h2>

          <RepList week={this.state.weekNum} />

          <table>
            <tr>
              <th> Deadlift </th>
              <th> Overhead Press </th>
              <th> Squat </th>
              <th> Bench Press </th>
            </tr>
            <tr>
              <td align="center">
                {(Dead * this.state.percentage1).toFixed(0)}
              </td>
              <td align="center">
                {(OHP * this.state.percentage1).toFixed(0)}
              </td>
              <td align="center">
                {(Squat * this.state.percentage1).toFixed(0)}
              </td>
              <td align="center">
                {(Bench * this.state.percentage1).toFixed(0)}
              </td>
            </tr>
            <tr>
              <td align="center">
                {(Dead * (this.state.percentage1 + 0.1)).toFixed(0)}
              </td>
              <td align="center">
                {(OHP * (this.state.percentage1 + 0.1)).toFixed(0)}
              </td>
              <td align="center">
                {(Squat * (this.state.percentage1 + 0.1)).toFixed(0)}
              </td>
              <td align="center">
                {(Bench * (this.state.percentage1 + 0.1)).toFixed(0)}
              </td>
            </tr>
            <tr>
              <td align="center">
                {(Dead * (this.state.percentage1 + 0.2)).toFixed(0)}
              </td>
              <td align="center">
                {(OHP * (this.state.percentage1 + 0.2)).toFixed(0)}
              </td>
              <td align="center">
                {(Squat * (this.state.percentage1 + 0.2)).toFixed(0)}
              </td>
              <td align="center">
                {(Bench * (this.state.percentage1 + 0.2)).toFixed(0)}
              </td>
            </tr>
          </table>

          <button onClick={this.changeWeek}>Cycle Weeks</button>
          <button onClick={this.editValues}>Edit 1 Rep Maxes</button>
        </div>
      );
    }
  }
}
