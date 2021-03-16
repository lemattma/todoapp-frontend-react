import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Lists from './components/lists';
import List from './components/list';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Lists} />
          <Route exact path="/lists/:id" component={List} />
        </Switch>
      </Router>
    );
  }
}

export default App;
