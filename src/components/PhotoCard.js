import React, { Component } from "react";
import LikeCounter from "./LikeCounter";

export default class PhotoCard extends Component {
  render() {
    return (
      <div>
        <LikeCounter />
      </div>
    );
  }
}
