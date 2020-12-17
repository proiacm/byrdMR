import React, {Component} from 'react';
import './App.css';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Nav from './Nav/Nav';

class App extends Component {

  state = {
    name: 'Enter your full name',
    email: 'Enter your email',
    message:'What are your plans?'
  }
    

  nameClickHandler = () => {
    this.setState({
      name: ''
    })
  }

  emailClickHandler = () => {
    this.setState({
        email: ''
    })
  }

  messageClickHandler = () => {
    this.setState({
      message: ''
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  emailChangeHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  messageChangeHandler = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {

    return (
      <div className="App">
        <Nav />
        <Hero />
        <Contact 
        name={this.state.name}
        email={this.state.email}
        message={this.state.message}
        nameClicked={this.nameClickHandler}
        emailClicked={this.emailClickHandler}
        messageClicked={this.messageClickHandler}
        nameChanged={this.nameChangeHandler}
        emailChanged={this.emailChangeHandler}
        messageChanged={this.messageChangeHandler}
        />
      </div>
    )};
  }

export default App;
