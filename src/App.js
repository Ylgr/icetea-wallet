import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, NewWallet, UnlockWallet } from './components/Page';

class App extends Component {
  render() {
    return (
      <span>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path={`/create` } component={NewWallet} />
            <Route path={`/unlock` } component={UnlockWallet} />
          </Switch>
        </Router>
      </span>
    );
  }
}

export default App;
