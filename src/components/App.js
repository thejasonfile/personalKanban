import React, { Component } from 'react';
import '../assets/css/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input : '',
      selectedColor: 'yellow',
      toDos : [
        {content: 'cash me outside', color: 'yellow', id: 0},
        {content: 'how bout dat?', color: 'yellow', id: 1},
      ],
      currentToDo: [],
      completedToDos: []
    };

    this.renderToDos = this.renderToDos.bind(this);
    this.renderCurrentToDo = this.renderCurrentToDo.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.makeCurrent = this.makeCurrent.bind(this);
  }

  onInputChange(e) {
    this.setState({input: e.target.value});
  }

  onColorChange(e) {
    this.setState({selectedColor: e.target.value})
  }

  renderToDos() {
    let todos = this.state.toDos;
    let resultArray = [];
    todos.map((todo, i) => resultArray.push(
      <li key={i} className={todo.color}>
        {todo.content}
        <button onClick={this.makeCurrent}>Make Current</button>
        <button>Done</button>
      </li>
    ));
    return resultArray;
  }

  renderCurrentToDo() {
    let todos = this.state.currentToDo;
    let resultArray = [];
    todos.map((todo, i) => resultArray.push(
      <li key={i}>
        {todo}
        <button>Done</button>
      </li>
    ));
    return resultArray;
  }

  addToDo(e) {
    e.preventDefault();
    let content = this.state.input;
    let toDos = this.state.toDos;
    toDos.push({content, color: this.state.selectedColor, id: this.state.toDos.length});
    this.setState({toDos});
  }

  makeCurrent(e){
    console.log(e.target.value)
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
          {this.renderToDos()}
        </div>
        <div className="currentToDo box">
          <h1>Current To Do</h1>
          {this.renderCurrentToDo()}
        </div>
        <div className="completedToDo box">
          <h1>Completed</h1>
        </div>
      </div>
    )
  }
}

export default App;
