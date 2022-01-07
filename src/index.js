import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// class HelloComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, dear component!</h1>
//         <h2>My name is {this.props.name}.</h2>
//       </div>
//     );
//   }
// }

const HelloComponent = function (props) {
  return (
    <div>
      <h1>Hello, dear component!</h1>
      <h2>
        My name is {props.name}. I'm a {props.role}
      </h2>
    </div>
  );
};

HelloComponent.defaultProps = {
  role: "Software Developer",
};

ReactDOM.render(
  <HelloComponent name="Salvador" />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
