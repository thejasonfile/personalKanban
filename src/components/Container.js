import React, { Component } from 'react';
import Note from './Note';

class Container extends Component {
  render() {
    return (
      <div className={this.props.classes}>
        <h1>{this.props.title}</h1>
        {this.props.notes.map((note) => {
          return <Note key={note.key} noteNumber={note.key} color={note.color} content={note.content} removeNote={this.props.removeNote}/>
        })}
      </div>
    );
  }
}

export default Container;
