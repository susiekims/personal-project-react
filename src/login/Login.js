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
    width: 300px;
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

// export default ({ handleSubmit, handleChange }) => (
//     <Login>
//         <LoginWrapper>
//             <h1>Log in</h1>
//             <form onSubmit={handleSubmit} >
//                 <input onChange={handleChange} type="text" placeholder="enter your username"/>
//                 <input type="submit" value="Log in"/>
//             </form>
//         </LoginWrapper>
//     </Login>
// )

class Login extends React.Component {
    state = {username: ''}

    handleChange = (e) => {
        this.setState({
          username: e.target.value
        })
      }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getEvents(this.state.username);
        this.props.getUsers(this.state.username);
        this.setState({username: ''})
    }

    render() {
        return (
        <LoginPage>
            <LoginWrapper>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} type="text" placeholder="enter your username"/>
                    <input type="submit" value="Log in"/>
                </form>
            </LoginWrapper>
        </LoginPage>
        )
    }
}

// const mapStateToProps = ({user, events}) => {
//     const { pulls, forks, receivedEvents } = events;
//     return {
//         pulls,
//         forks,
//         // loggedIn: receivedEvents,
//         user
//     }
// }

const mapDispatchToProps = {
    getEvents: eventsAction,
    getUsers: userAction
}

export default connect(null, mapDispatchToProps)(Login);


