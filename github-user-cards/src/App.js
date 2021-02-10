import './App.css';
import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  };
  
  componentDidMount() {
    axios.get('https://api.github.com/users/nwestallen')
    .then(res => {
      this.setState({users:[res.data]});
      console.log(this.state);
    })
    .catch(err => console.log(err));

    axios.get('https://api.github.com/users/nwestallen/followers')
    .then(res => {
      const followers = res.data;
      followers.forEach(follower => {
        axios.get(`https://api.github.com/users/${follower.login}`)
        .then(response => this.setState({users: [...this.state.users, response.data]}))
        .catch(error => console.log(error));
      });
      console.log(this.state)
    })
    .catch(err => console.log(err));

    return null;
  }

  render() {
    if(this.state.users.length === 0) {
      return <h1>Loading</h1>
    }
    return(
      <div className='container'>
        <div className='header'>
          <h1>GitHub People</h1>
        </div>
        {this.state.users.map(user => <UserCard key={user.id} userData={user}/>)}
      </div>
    )
  }
};


export default App;
