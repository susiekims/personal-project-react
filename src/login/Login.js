import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import eventsAction from '../store/actions/events';
import userAction from '../store/actions/user';

const LoginPage = styled.div`
    display: ${({loggedIn}) => loggedIn ? 'none' : 'block'}
    height: 100vh;
`
const LoginWrapper = styled.div`
    width: 600px;
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

class Login extends React.Component {
    state = {
        username: ''
    }

    handleChange = (e) => {
        this.setState({
          username: e.target.value.trim()
        })
      }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.username.length > 0) {
            this.props.getEvents(this.state.username);
            this.props.getUsers(this.state.username);
            this.setState({username: ''})
        }
    }

    render() {

        return (
        <LoginPage>
            <LoginWrapper>
                <h2>Get GitHub Info</h2>
                <form onSubmit={this.handleSubmit} >
                    <input className='login-input' onChange={this.handleChange} type="text" placeholder="Enter your username"/>
                    <input className="login-button" type="submit" value="Log in"/>
                </form>
            {
                this.props.error ? <p>Sorry, something went wrong. Please try again.</p> : null
            }
            </LoginWrapper>
        </LoginPage> 
        )
    }
}

const mapStateToProps = ({events}) => {
    console.log(events.error);
    const { error } = events;
    return {
        error
    }
}

const mapDispatchToProps = {
    getEvents: eventsAction,
    getUsers: userAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


