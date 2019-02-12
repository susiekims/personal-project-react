import React, { Component } from 'react';
import './App.css';
import Login from './login/Login';
import Main from './main/Main';
import { connect } from "react-redux";
import eventsAction from './store/actions/events';
import userAction from './store/actions/user';

import user from './store/reducers/user';
import events from './store/reducers/events';


import eventsReducer from './store/reducers/events';

// Once the user has logged in, they should be able to see the most recent repositories (repos) that use has forked and their most recent pull requests.

// Each of the forked repos should display the name of that repo as a link, and link to the base repo.

// Each of the pull requests should display the title of the pull request as a link, and link to that pull request.

// Each of the pull requests should have, in addition, a visual indicator for whether it is open, closed or merged. This could be colour coded, or just have the status in words next to it.

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = { 
  //     username: ''
  //   };
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.getEvents(this.state.username);
  //   this.props.getUsers(this.state.username);
  //   this.setState({username: ''})
  // }

  render() {
    return (
      <div className="App">
      {
        this.props.loggedIn ? 
        <Main forks={this.props.forks} pulls={this.props.pulls}/> :
        <Login />
      }
    </div>
    );
  }
}

const mapStateToProps = ({user, events}) => {
  const { pulls, forks, receivedEvents, error } = events;
  return {
    pulls,
    forks,
    loggedIn: receivedEvents,
    error
    // user
  }
}

const mapDispatchToProps = {
  getEvents: eventsAction,
  getUsers: userAction
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;