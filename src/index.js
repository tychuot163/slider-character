import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Slider from "./Slider";
import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="demo">
          <Switch>
            <Route exact path="/" component={Slider} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
