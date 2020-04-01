import React, { Component } from 'react';
import UserCardList from './components/UserCardList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      users: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      userName: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault();

    const userName = this.state.userName;
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    this.setState({
      userName: "",
      users: [...this.state.users, data]
    });

  }

  render() {
    
    return (
      <div className="car">
        <form onSubmit={this.handleSubmit}>
          <label> Are Words Needed?
            <input type="text" onChange={this.handleChange} value={this.state.userName} placeholder="Words and Stuff"></input>
          </label>
          <button type="submit" >Submit</button>
        </form>
        <br></br>
        <UserCardList users={this.state.users} />
      </div>
    );
  }
}

export default App;
