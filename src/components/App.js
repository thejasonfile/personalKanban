import React, { Component } from 'react';
import '../assets/css/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: 0,
      input : '',
      selectedColor: 'yellow',
      toDos : [],
    };

    this.createToDo = this.createToDo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.incrementId = this.incrementId.bind(this);
  }

  onInputChange(e) {
    this.setState({input: e.target.value});
  }

  onColorChange(e) {
    this.setState({selectedColor: e.target.value})
  }

  incrementId() {
    this.setState({currentId: this.state.currentId + 1})
  }

  createToDo(e) {
    e.preventDefault();
    let content = this.state.input;
    let toDos = this.state.toDos;
    toDos.push({
      content,
      color: this.state.selectedColor,
      id: this.state.currentId,
      status: 'Open'
    });
    this.setState({toDos});
    this.incrementId();
  }

  renderToDos(status) {
    let toDoList = this.filterArray(this.state.toDos, status);
    return toDoList.map((todo) => {
      return <li>{todo.content}</li>;
    })
  }

  getSelectedTodo(arr, id) {
    return arr.filter((item) => {
      return item.id === id
    });
  }

  filterArray(arr, id) {
    return arr.filter((item) => {
      return item.id !== id
    });
  }

  makeDone(id) {
    let selectedToDo = this.getSelectedTodo(this.state.currentToDo, id)
  }

  makeCurrent(id) {
    this.addToCurrentArray(id);
    this.removeFromToDo(id);
  }

  removeFromToDo(id) {
    let newToDos = this.filterArray(this.state.toDos, id);
    this.setState({toDos: newToDos});
  }

  addToCurrentArray(id) {
    let selectedToDo = this.getSelectedTodo(this.state.toDos, id)
    this.setState({currentToDo: selectedToDo});
  }

  render () {
    return (
      <div className="container">
        <h1>Personal Kanban</h1>
        <form>
          <label htmlFor="noteContent">Note Content: </label>
          <input type="text" name="noteContent" id="noteContent" value={this.state.input} onChange={this.onInputChange}></input>
          <input type="radio" name="color" value="yellow" onChange={this.onColorChange}></input>Yellow
          <input type="radio" name="color" value="green" onChange={this.onColorChange}></input>Green
          <input type="radio" name="color" value="blue" onChange={this.onColorChange}></input>Blue
          <input type="radio" name="color" value="orange" onChange={this.onColorChange}></input>Orange
          <br />
          <input type="submit" value="Submit" onClick={this.addToDo}></input>
        </form>
        <div className="toDo box">
          <h1>To Dos</h1>
          <ul>
          {

          }
          </ul>
        </div>
        <div className="currentToDo box">
          <h1>Current To Do</h1>

        </div>
        <div className="completedToDo box">
          <h1>Completed</h1>

        </div>
      </div>
    )
  }
}

export default App;
