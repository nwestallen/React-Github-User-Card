import './App.css';
import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  };
  
  componentDidMount() {
    axios.get('https://api.github.com/users/nwestallen')
    .then(res => {
      this.setState(res.data);
      console.log(this.state);
    })
    .catch(err => console.log(err));
    return null;
  }

  render() {
    return(
      <div>
        <h1>GitHub People</h1>
        <UserCard />
      </div>
    )
  }
};


export default App;
