import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Menu from "./components/Menu";
import Words from "./route/Words";
import Add from "./route/Add";
import Delete from "./route/Delete";
import Count from "./route/Count";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Menu/>
          <Switch>
            <Route path="/" exact component={Words} />
            <Route path="/add" component={Add} />
            <Route path="/delete" component={Delete} />
            <Route path="/count" component={Count} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
