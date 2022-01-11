import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const headers = ["Album", "Artist", "Year"];

const data = [
  ["Nevermind", "Nirvana", "1991"],
  ["Wish You Were Here", "Pink Floyd", "1975"],
  ["Abbey Road", "The Beatles", "1969"],
  ["OK Computer", "Radiohead", "1997"],
  ["Led Zeppelin IV", "Led Zeppelin", "1971"],
  ["Is This It", "The Strokes", "2001"],
  ["Appetite for Destruction", "Guns N' Roses", "1987"],
  ["A Night at the Opera", "Queen", "1975"],
  ["Hotel California", "Eagles", "1976"],
  ["Pet Sounds", "The Beach Boys", "1966"],
];

class Table extends React.Component {
  constructor(props) {
    super();
    this.state = { data: props.initialData };
  }

  secretFunction(message) {
    console.log(message);
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {this.props.headers.map((header, idx) => (
                <th key={idx}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, idx) => (
                  <td key={idx}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={this.secretFunction.bind(this, "You found me! haha")}>
          What do I do?
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Table headers={headers} initialData={data}></Table>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
