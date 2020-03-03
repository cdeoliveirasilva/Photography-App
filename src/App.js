import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import PageContainer from "./components/PageContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/photography" component={PageContainer} />
        <Route exact path="/photography/:category" component={PageContainer} />
      </div>
    );
  }
}
export default App;
