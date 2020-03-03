import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div className="App-menu">
        <p>This is a gallery app to practice a bit with React.js</p>
        <h2>Choose a category for a selection of random pictures</h2>
        <Link className="button1 bouncy" to="/photography/random">
          {" "}
          Misc
        </Link>
        <Link className="button1 bouncy" to="/photography/art">
          {" "}
          Art
        </Link>
        <Link className="button1 bouncy" to="/photography/nature">
          {" "}
          Nature
        </Link>
        <Link className="button1 bouncy" to="/photography/food">
          {" "}
          Food
        </Link>
        <Link className="button1 bouncy" to="/photography/animals">
          {" "}
          Animals
        </Link>
      </div>
    );
  }
}
