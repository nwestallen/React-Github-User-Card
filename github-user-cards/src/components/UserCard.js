//UserCard Class Component
import React from 'react';
import '../App.css';

class UserCard extends React.Component {

    render() {
        return(
            <div className='userCard'>
                <img className='userImg' alt='avi' source='' />
                <div className='userInfo'>
                    <p>Name</p>
                </div>
            </div>
        )
    }
};

export default UserCard;