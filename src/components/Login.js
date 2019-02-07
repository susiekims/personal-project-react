import React from 'react';

const Login = ({ handleSubmit, handleChange }) => (
    <div className="login">
    <h1>Log in</h1>
    <form onSubmit={handleSubmit} >
        <input onChange={handleChange} type="text" placeholder="enter your username"/>
        <input type="submit" value="Log in"/>
    </form>
    </div>
)

export default Login;

