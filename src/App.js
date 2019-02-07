import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'


// Once the user has logged in, they should be able to see the most recent repositories (repos) that use has forked and their most recent pull requests.

// Each of the forked repos should display the name of that repo as a link, and link to the base repo.

// Each of the pull requests should display the title of the pull request as a link, and link to that pull request.

// Each of the pull requests should have, in addition, a visual indicator for whether it is open, closed or merged. This could be colour coded, or just have the status in words next to it.

class App extends Component {
  constructor() {
    super();
    this.state = { 
      username: '',
      repos: [],
      pulls: [],
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
        .then(event => {
          const pulls = repos.filter(event => repo.type === "PullRequest" )
          const forks = repos.filter(repo => repo.type === "ForkRequest")
          this.setState({{ forks, pulls }})
        })
        
  }

 

  render() {
    return (
      <div className="App">
        <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <div className="Repos">
       
        </div>
    </div>
    );
  }
}

export default App;
