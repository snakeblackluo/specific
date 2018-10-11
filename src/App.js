import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import HomePages from './views/pages/HomePages';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={HomePages}></Route>
      </Router>
    );
  }
}

export default App;
