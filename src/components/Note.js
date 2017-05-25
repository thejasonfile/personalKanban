import React, { Component } from 'react';
import DeleteButton from './DeleteButton';

class Note extends Component {
  render(props) {
    const style = {
      backgroundColor: this.props.color
    }
    return (
      <div style={style}>
        {this.props.content}
        <DeleteButton
          removeNote={this.props.removeNote}
          noteNumber={this.props.noteNumber}
        />
      </div>
    );
  }
}

export default Note;
