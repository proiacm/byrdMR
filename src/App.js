import React, {Component} from 'react';
import './App.css';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Nav from './Nav/Nav';

class App extends Component {

  state = {
    form: [
      {value: 'Enter your full name'}
    ]
  }

  formClickHandler = (event) => {
    this.setState({
      form: [
        {value: ''}
      ]
    })
  }

  formChangeHandler = (event) => {
    this.setState({
      form: [
        {value: event.target.value}
      ]
    })
  }


  render() {

    let contact = <div>
      {this.state.form.map((form, index) => {
        return <Contact key={index} value={form.value} clicked={this.formClickHandler} changed={this.formChangeHandler} />
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
