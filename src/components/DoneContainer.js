import React, { Component } from 'react';
import Note from './Note';

class DoneContainer extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        {this.props.notes.map((note) => {
          return <Note key={note.content} color={note.color} content={note.content} />
        })}
      </div>
    );
  }
}

export default DoneContainer;
