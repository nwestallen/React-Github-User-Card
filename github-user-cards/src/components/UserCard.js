//UserCard Class Component
import React from 'react';
import '../App.css';

class UserCard extends React.Component {

    render() {

        const { avatar_url, name, login, location, html_url, followers, following } = this.props.userData
        return(
            <div className='card'>
                <img alt='avi' src={avatar_url}/>
                <div className='userInfo'>
                    <p className='name'>{name}</p>
                    <p className='username'>{login}</p>
                    <p>Location: {location}</p>
                    <p>Profile: {html_url}</p>
                    <p>Followers: {followers}</p>
                    <p>Following: {following}</p>
                </div>
            </div>
        )
    }
};

export default UserCard;