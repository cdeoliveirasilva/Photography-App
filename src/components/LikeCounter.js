import React, { Component } from "react";

export default class LikeCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numLikes: 0,
      numDislikes: 0
    };
  }
  like = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };
  dislike = () => {
    this.setState({
      numDislikes: this.state.numDislikes + 1
    });
  };
  render() {
    return (
      <div className="App-likeCounter">
        <h1>
          <button className="button2" onClick={this.like}>
            {this.state.numLikes} Like
          </button>
          <button className="button2" onClick={this.dislike}>
            {this.state.numDislikes} Dislike
          </button>
        </h1>
      </div>
    );
  }
}
