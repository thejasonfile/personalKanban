import React, { Component } from 'react';
import '../assets/css/app.css';
import Header from './Header'
import AddForm from './AddForm'
import Container from './Container'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoNotes: [],
      currentProjectNote: [],
      doneNotes: [
        {key: 1, color: 'red', content: 'eat lunch'}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddForm
          numNotes={this.state.toDoNotes.length}
          addNote={newNote => this.setState({ toDoNotes: [...this.state.toDoNotes, newNote] })}
        />
        <Container
          notesInContainer={this.state.toDoNotes.length}
          classes={"container"}
          notes={this.state.toDoNotes}
          title={"To Do"}
          removeNote={noteNumber => this.setState({ toDoNotes: this.state.toDoNotes.filter((note) => {
            return note.key !== noteNumber
          })})}
        />
        <Container
          notesInContainer={this.state.currentProjectNote.length}
          classes={"container currentProject"}
          notes={this.state.currentProjectNote}
          title={"Current Project"}
          removeNote={noteNumber => this.setState({ currentProjectNote: this.state.currentProjectNote.filter((note) => {
            return note.key !== noteNumber
          })})}
        />
        <Container
        notesInContainer={this.state.doneNotes.length}
        classes={"container"}
        notes={this.state.doneNotes}
        title={"Done"}
        removeNote={noteNumber => this.setState({ doneNotes: this.state.doneNotes.filter((note) => {
          return note.key !== noteNumber
        })})}
        />
      </div>
    );
  }
}

export default App;
