import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Landing from './routes/Landing';
import Home from './routes/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/user" component={Home}/>
            <Route exact path="/" component={Landing}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
