import React from 'react';
import styled from 'styled-components';

const Login = styled.div`
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

export default ({ handleSubmit, handleChange }) => (
    <Login>
        <LoginWrapper>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} type="text" placeholder="enter your username"/>
                <input type="submit" value="Log in"/>
            </form>
        </LoginWrapper>
    </Login>
)


