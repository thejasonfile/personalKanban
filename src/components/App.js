import React, { Component } from 'react';
import '../assets/css/app.css';
import Header from './Header'
import AddForm from './AddForm'
import Container from './Container'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoNotes: [
        {color: 'yellow', content: 'hello'}
      ],
      currentProjectNote: [],
      doneNotes: [
        {color: 'red', content: 'eat lunch'}
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AddForm
          addNote={(note) => this.setState.toDoNotes.push(note)}
        />
        <Container
          classes={"container"}
          notes={this.state.toDoNotes}
          title={"To Do"}
        />
        <Container
          classes={"container currentProject"}
          notes={this.state.currentProjectNote}
          title={"Current Project"}
        />
        <Container
        classes={"container"}
        notes={this.state.doneNotes}
        title={"Done"}
        />
      </div>
    );
  }
}

export default App;
