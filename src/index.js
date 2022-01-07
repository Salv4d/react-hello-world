import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const HelloComponent = function (props) {
  return (
    <div>
      <h1>Hello, dear component!</h1>
      <h2>My name is {props.name}.</h2>
    </div>
  );
};

ReactDOM.render(
  <HelloComponent name="Salvador" />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
