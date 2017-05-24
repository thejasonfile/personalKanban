import React, { Component } from 'react';

class AddButton extends Component {
  render() {
    return (
      <div>
        <button onClick={event => this.addNote()} >+</button>
      </div>
    );
  }

  addNote() {

  }
}

export default AddButton;
