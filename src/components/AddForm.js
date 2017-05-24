import React, { Component } from 'react';
import '../assets/css/app.css';
import RadioButton from './RadioButton';
import AddButton from './AddButton';

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteContent: '',
      selectedColor: ''
    };
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
        <RadioButton
          name="color"
          color="Yellow"
          changeSelectedColor={(selectedColor) => this.setState({selectedColor})}
        />
        <RadioButton
          name="color"
          color="Green"
          changeSelectedColor={(selectedColor) => this.setState({selectedColor})}
        />
        <RadioButton
          name="color"
          color="Blue"
          changeSelectedColor={(selectedColor) => this.setState({selectedColor})}
        />
        <RadioButton
          name="color"
          color="Orange"
          changeSelectedColor={(selectedColor) => this.setState({selectedColor})}
        />
        <AddButton
          noteContent={this.state.noteContent} noteColor={this.state.selectedColor}
        />
      </div>
    );
  }

  onInputChange(noteContent) {
    this.setState({noteContent});
  }
}

export default AddForm;
