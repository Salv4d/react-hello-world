import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

class HelloComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, dear component!</h1>
        <h2>
          My name is {this.props.name}. I'm a {this.props.role}
        </h2>
      </div>
    );
  }
}

HelloComponent.defaultProps = {
  role: "Software Developer",
};

class InputCounter extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  componentDidMount() {
    console.log("InputCounter mounted!");
  }

  componentWillUnmount() {
    console.log("InputCounter unmounted!");
  }

  componentDidUpdate() {
    console.log("InputCounter updated!");
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("Should InputCounter update?");
    console.log(newProps, newState);

    if (newState.text.length > 25) {
      return false;
    }
    return true;
  }

  render() {
    const text = "text" in this.state ? this.state.text : this.props.text;
    return (
      <div>
        <textarea
          defaultValue={text}
          onChange={(event) => this.onTextChange(event)}
        ></textarea>
        <h3>{text.length}</h3>
      </div>
    );
  }
}

InputCounter.defaultProps = {
  text: "Temet Nosce",
};

ReactDOM.render(
  <div>
    <HelloComponent name="Salvador" />,<InputCounter></InputCounter>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
