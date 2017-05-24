import React, { Component } from 'react';
import Note from './Note';

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {notes: [
      {color: 'yellow', content: 'hey'},
      {color: 'green', content: 'what'}
    ]
    }
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        {this.state.notes.map((note) => {
          return <Note key={note.content} color={note.color} content={note.content} />
        })}
      </div>
    );
  }
}

export default Container;
