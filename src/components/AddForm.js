import React, { Component } from 'react';
import '../assets/css/app.css';
import RadioButton from './RadioButton'

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {noteContent: ''}
  }
  render() {
    return (
      <div className="form">
        <input
          value={this.state.noteContent}
          onChange={event => this.onInputChange(event.target.value)}
          type="text"
          name="name"
        ></input>
        <RadioButton name="yellow" color="Yellow" />
        <RadioButton name="green" color="Green" />
        <RadioButton name="blue" color="Blue" />
        <RadioButton name="orange" color="Orange" />
        <button>+</button>
      </div>
    );
  }

  onInputChange(noteContent) {
    this.setState({noteContent});
  }
}

export default AddForm;
