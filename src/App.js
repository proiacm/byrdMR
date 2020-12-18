import React, {Component} from 'react';
import './App.css';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Nav from './Nav/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  state = {
    name: '',
    email: '',
    message:''
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

  submitHandler = (event) => {
    event.preventDefault()
    toast.success("Thank you for contacting us!");
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
        nameChanged={this.nameChangeHandler}
        emailChanged={this.emailChangeHandler}
        messageChanged={this.messageChangeHandler}
        submit={this.submitHandler}
        />
        <ToastContainer 
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </div>
    )};
  }

export default App;
