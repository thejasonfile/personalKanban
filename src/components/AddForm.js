import React, { Component } from 'react';
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
  render(addNote) {
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
          addNote={this.props.addNote}
          noteColor={this.state.selectedColor}
          noteContent={this.state.noteContent}
        />
      </div>
    );
  }

  onInputChange(noteContent) {
    this.setState({noteContent});
  }

}

export default AddForm;
