import React, { Component } from "react";

export default class Feed extends Component {
  render() {
    return (
      <div className="App-feed">
        <ul>
          {this.props.pictures.map(picture => (
            <img
              className="img1"
              src={picture.webformatURL}
              alt=""
              key={picture.id}
            ></img>
          ))}
        </ul>
      </div>
    );
  }
}

// const pictures = (picture, id) => ()

// Move state and fetching to PageContainer
// Pass data as props to Feed
// Make callback functions for menu
