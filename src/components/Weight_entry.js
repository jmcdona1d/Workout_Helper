import React from "react";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuesEntered: false,
      value: "",
      value2: "",
      value3: 8,
      value4: "",
      weekNum: 1,
      percentage1: 0.65
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeWeek = this.changeWeek.bind(this);
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
    this.setState({ valuesEntered: true });
    event.preventDefault();
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

  render() {
    if (!this.state.valuesEntered) {
      return (
        <ul>
          <form onSubmit={this.handleSubmit}>
            <li>
              <label>
                Name:
                <input
                  name="value1"
                  type="number"
                  value={this.state.value1}
                  onChange={this.handleInputChange}
                />
              </label>
            </li>
            <li>
              <label>
                Name:
                <input
                  name="value2"
                  type="number"
                  value={this.state.value2}
                  onChange={this.handleInputChange}
                />
              </label>
            </li>
            <li>
              <label>
                Name:
                <input
                  name="value3"
                  type="number"
                  value={this.state.value3}
                  onChange={this.handleInputChange}
                />
              </label>
            </li>
            <li>
              <label>
                Name:
                <input
                  name="value4"
                  type="number"
                  value={this.state.value4}
                  onChange={this.handleInputChange}
                />
              </label>
            </li>
            <input type="submit" value="Submit" />
          </form>
        </ul>
      );
    } else {
      var bench = parseInt(this.state.value3);

      return (
        <div>
          <h2>Weights to use for week {this.state.weekNum}:</h2>
          <ul>
            <li>{(bench * this.state.percentage1).toFixed(0)}</li>

            <li>{(bench * (this.state.percentage1 + 0.1)).toFixed(0)}</li>

            <li>{(bench * (this.state.percentage1 + 0.2)).toFixed(0)}</li>
          </ul>
          <button onClick={this.changeWeek}>Cycle Weeks</button>
        </div>
      );
    }
  }
}
