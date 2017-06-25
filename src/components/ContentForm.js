import React, {Component} from 'react';

class ContentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      selectedColor: 'yellow',
      error: ''
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

  checkInput(input) {
    return input
  }

  handleSubmit(e) {
    e.preventDefault();
    let content = this.checkInput(this.state.input);
    let color = this.state.selectedColor;
    let id = this.props.currentId
    if(!content) {
      let error = "Note content cannot be blank"
      this.setState({error})
    } else {
      this.props.createNewToDo(content, color, 'open', id);
      this.setState({input: '', error: ''})
    }
  }

  render() {
    return (
      <div className='contentForm'>
        <form>
          <label htmlFor="noteContent">Note Content: </label>
          <input type="text" name="noteContent" id="noteContent" value={this.state.input} onChange={this.onInputChange}></input>
          <div className='error'>{this.state.error}</div>
          <input type="radio" name="color" value="yellow" onChange={this.onColorChange}></input>Yellow
          <input type="radio" name="color" value="green" onChange={this.onColorChange}></input>Green
          <input type="radio" name="color" value="blue" onChange={this.onColorChange}></input>Blue
          <input type="radio" name="color" value="orange" onChange={this.onColorChange}></input>Orange
          <br />
          <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
        </form>
      </div>
    )
  }
}

export default ContentForm;
