import React from 'react';
import { connect } from "react-redux";
import Avatar from '../components/Avatar';

const User = ({login, avatar_url, html_url, created_at}) => {
 return (
     <div>
         <Avatar src={avatar_url}/>
         <h1>{login}</h1>
         <h2>User since {created_at}</h2>
         <a href={html_url}>View Profile</a>
         <button>Log Out</button>
     </div>
    )
}

const mapStateToProps = ({user}) => {
    const { user: { login, avatar_url, html_url, created_at } } = user;
    return { login, avatar_url, html_url, created_at }
}

export default connect(mapStateToProps)(User);
