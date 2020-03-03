import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Feed from "./Feed";
import Footer from "./Footer";
import LikeCounter from "./LikeCounter";

export default class PageContainer extends Component {
  state = {
    loading: true,
    pictures: []
  };
  componentDidMount() {
    // find out which category from Route
    // call getCategoryPictures with that cat
    let categoryFromRoute = this.props.match.params.category;
    if (categoryFromRoute === undefined) {
      categoryFromRoute = "";
    }
    console.log(categoryFromRoute, "<--- cat fromroute");

    this.getCategoryPictures(categoryFromRoute);
  }

  componentDidUpdate(prevProps) {
    const prevCategoryFromRoute = prevProps.match.params.category;
    let categoryFromRoute = this.props.match.params.category;

    if (prevCategoryFromRoute !== categoryFromRoute) {
      if (categoryFromRoute === undefined) {
        categoryFromRoute = "";
      }

      console.log(categoryFromRoute, "<--- cat fromroute");

      this.getCategoryPictures(categoryFromRoute);
    }
  }

  // getNaturePics = () => {};
  getCategoryPictures = async category => {
    console.log("Getting pictures of: ", category);
    const url = `https://pixabay.com/api/?key=15235414-20b266269ceaf5a4ea824051e&q=${category}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.hits);
    this.setState({ pictures: data.hits, loading: false });
  };

  render() {
    return (
      <div>
        <Header className="App-header" />

        <Menu
          className="App-menu"
          getCategoryPictures={this.getCategoryPictures}
        />

        <Feed pictures={this.state.pictures} className="App-feed" />
        <LikeCounter className="App-likeCounter" />

        <Footer className="App-footer" />
      </div>
    );
  }
}
