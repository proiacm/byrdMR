import React, {Component} from 'react';
import './App.css';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Nav from './Nav/Nav';

class App extends Component {

  state = {
    form: [
      {name: 'Enter your full name', email: 'Enter your email', message:'What are your plans?'}
    ]
  }

  nameClickHandler = () => {
    this.setState({
      form: [
        {name: ''}
      ]
    })
  }

  emailClickHandler = () => {
    this.setState({
      form: [
        {email: ''}
      ]
    })
  }

  messageClickHandler = () => {
    this.setState({
      form: [
        {message: ''}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      form: [
        {name: event.target.value}
      ]
    })
  }

  emailChangeHandler = (event) => {
    this.setState({
      form: [
        {email: event.target.value}
      ]
    })
  }

  messageChangeHandler = (event) => {
    this.setState({
      form: [
        {message: event.target.value}
      ]
    })
  }

  render() {

    let contact = <div>
      {this.state.form.map((form, index) => {
        return <Contact 
        key={index}
        name={form.name}
        email={form.email}
        message={form.message}
        nameClicked={this.nameClickHandler}
        emailClicked={this.emailClickHandler}
        messageClicked={this.messageClickHandler}
        nameChanged={this.nameChangeHandler}
        emailChanged={this.emailChangeHandler}
        messageChanged={this.messageChangeHandler}
        />
      })}
    </div>

    return (
      <div className="App">
        <Nav />
        <Hero />
        {contact}
      </div>
    )};
  }

export default App;
