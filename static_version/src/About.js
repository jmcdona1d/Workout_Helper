import React from "react";
import { Container } from "react-bootstrap";

export default class About extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <h4>About</h4>
        <p>
          This is a simple calculator app meant for use in the 5/3/1 progressive
          overload weightlifting schema developed by body-builder Jim Wendler.
          After inputting your 1 rep maxes, it will tell you what weights to use
          for each week as well as how to structure your sets. To learn more
          about this program visit{" "}
          <a href="https://jimwendler.com/blogs/jimwendler-com/101065094-5-3-1-for-a-beginner">
            <i>Jim Wendler's blog</i>.
          </a>
          <h5> </h5>
          <p>
            This site is an open source project created by Github User{" "}
            <a href="https://github.com/jmcdona1d">
              <i>jmcdona1d</i>
            </a>
            . The project source code can be found{" "}
            <a href="https://github.com/jmcdona1d/workout_helper">
              <i>here</i>
            </a>{" "}
            Feel free to raise suggestions/improvements in an issue or tackle
            them yourself and submit a pull request.
          </p>
          <h5></h5>
          <p>
            Some features that are currently in development are:{" "}
            <ul>
              <li>
                Option to repaeat cycles weights or increase them after 4 weeks
              </li>
              <li>
                A login system that can persist your weights when you leave
              </li>
              <li>Automatic week switching</li>
              <li>Weight plate calculator</li>
            </ul>
          </p>
        </p>
      </Container>
    );
  }
}
