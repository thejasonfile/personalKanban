import React, { Component } from 'react';
import '../assets/css/app.css';
import Header from './Header'
import AddForm from './AddForm'
import CurrentProject from './CurrentProject'
import Container from './Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddForm />
        <Container title={"To Do"}/>
        <CurrentProject title={"Current Project"}/>
        <Container title={"Done"}/>
      </div>
    );
  }
}

export default App;
