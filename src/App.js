import React, {Component} from 'react';
import './App.css';
import Hero from './Hero/Hero';
import Nav from './Nav/Nav';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
      </div>
    )};
  }

export default App;
