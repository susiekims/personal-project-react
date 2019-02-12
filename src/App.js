import React, { Component } from 'react';
import './App.css';
import Login from './login/Login';
import Main from './main/Main';
import { connect } from "react-redux";
import eventsAction from './store/actions/events';
import userAction from './store/actions/user'

// Once the user has logged in, they should be able to see the most recent repositories (repos) that use has forked and their most recent pull requests.

// Each of the forked repos should display the name of that repo as a link, and link to the base repo.

// Each of the pull requests should display the title of the pull request as a link, and link to that pull request.

// Each of the pull requests should have, in addition, a visual indicator for whether it is open, closed or merged. This could be colour coded, or just have the status in words next to it.

class App extends Component {
  render() {
    return (
      <div className="App">
      {
        this.props.loggedIn ? 
        <Main /> :
        <Login />
      }
    </div>
    );
  }
}

const mapStateToProps = ({user: {receivedUser}}) => {
  return {
    loggedIn: receivedUser,
  }
}

const mapDispatchToProps = {
  getEvents: eventsAction,
  getUsers: userAction
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
