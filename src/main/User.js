import React from 'react';
import { connect } from "react-redux";
import Avatar from '../components/Avatar';
import logOut from '../store/actions/logout'

const User = ({login, avatar_url, html_url, logOut}) => {
 return (
     <div className="user">
         <Avatar src={avatar_url}/>
         <h1>{login}</h1>
         <a className="button" href={html_url}>View Profile</a>
         <button onClick={logOut} className="button--inverted">Log Out</button>
     </div>
    )
}

const mapDispatchToProps = {
    logOut
}

const mapStateToProps = ({user}) => {
    const { user: { login, avatar_url, html_url, created_at } } = user;
    return { login, avatar_url, html_url, created_at }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
