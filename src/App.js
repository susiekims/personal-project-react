import React, { Component } from 'react';
import './App.css';
import Login from './login/Login';
import Main from './main/Main';

// Once the user has logged in, they should be able to see the most recent repositories (repos) that use has forked and their most recent pull requests.

// Each of the forked repos should display the name of that repo as a link, and link to the base repo.

// Each of the pull requests should display the title of the pull request as a link, and link to that pull request.

// Each of the pull requests should have, in addition, a visual indicator for whether it is open, closed or merged. This could be colour coded, or just have the status in words next to it.

class App extends Component {
  constructor() {
    super();
    this.state = { 
      loggedIn: false,
      forks: [],
      pulls: [],
      username: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.username}/events`)
      .then(res => res.json())
        .then(events => {
          console.log(events);
          
          const pulls = events.filter(({type}) => type === "PullRequestEvent" )
            .map(({payload: { pull_request: {title, html_url, state, merged}}}) => {
              return {
                url: html_url, 
                name: title,
                state,
                merged,
              }
          });

          const forks = events.filter(({type}) => type === "ForkEvent")
            .map(({repo: { name }, payload: { forkee: {full_name, name: title}}}) => {
                return {
                  baseRepoUrl: `https://github.com/${name}`, 
                  repoUrl: `https://github.com/${full_name}`, 
                  title}
                })
          this.setState({ loggedIn: true, forks, pulls, username: '' })
        })
  }

  render() {
    return (
      <div className="App">
        { 
          this.state.loggedIn ? 
          <Main forks={this.state.forks} pulls={this.state.pulls}/> :
          <Login handleChange={this.state.handleChange} handleSubmit={this.state.handleSubmit} />
        }
    </div>
    );
  }
}

export default App;
