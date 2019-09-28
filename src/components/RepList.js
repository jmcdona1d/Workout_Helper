import React from "react";

export default class RepList extends React.Component {
  render() {
    const week = this.props.week;
    var list = new Array();
    list[1] = "set of 5, set of 5, set of 5+";
    list[2] = "set of 3, set of 3, set of 3+";
    list[3] = "set of 5, set of 3, set of 1+";
    list[4] = "set of 5, set of 5, set of 5";

    const display = list[parseInt(week)];

    return <h4>{display}</h4>;
  }
}
