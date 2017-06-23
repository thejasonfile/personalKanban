import React, {Component} from 'react';

class ContentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      selectedColor: 'yellow'
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({input: e.target.value});
  }

  onColorChange(e) {
    this.setState({selectedColor: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let content = this.state.input;
    let color = this.state.selectedColor;
    let id = this.props.currentId
    this.props.createNewToDo(content, color, 'open', id);
    this.setState({input: ''})
  }

  render() {
    return (
      <form>
        <label htmlFor="noteContent">Note Content: </label>
        <input type="text" name="noteContent" id="noteContent" value={this.state.input} onChange={this.onInputChange}></input>
        <input type="radio" name="color" value="yellow" onChange={this.onColorChange}></input>Yellow
        <input type="radio" name="color" value="green" onChange={this.onColorChange}></input>Green
        <input type="radio" name="color" value="blue" onChange={this.onColorChange}></input>Blue
        <input type="radio" name="color" value="orange" onChange={this.onColorChange}></input>Orange
        <br />
        <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
      </form>
    )
  }
}

export default ContentForm;
