import React, { Component } from "react";
import "./WelcomePage.css";
import { Link } from "react-router-dom";

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcomePage">
        <img
          className="img2"
          src="https://cdn3.iconfinder.com/data/icons/photography-19/154/photography_camera_photo_14-512.png"
          alt=""
        ></img>
        <h1>Welcome to the gallery</h1>
        <Link className="welcomeLink" to="/photography">
          click for pictures
        </Link>
        <div className="App-footer2">made with ❤ at codaisseur</div>
      </div>
    );
  }
}
export default WelcomePage;
