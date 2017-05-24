import React, { Component } from 'react';
import '../assets/css/app.css';

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
