import React, { Component } from 'react';
import '../assets/css/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input : '',
      toDos : ['eat lunch', 'walk dog']
    };

    this.renderToDos = this.renderToDos.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({input: e.target.value});
  }

  renderToDos() {
    let todos = this.state.toDos;
    let resultArray = [];
    todos.map((todo, i) => resultArray.push(<li key={i}>{todo}</li>));
    return resultArray;
  }

  addToDo(e) {
    e.preventDefault();
    let noteContent = this.state.input;
    let toDos = this.state.toDos;
    toDos.push(noteContent);
    this.setState({input: '', toDos});
  }

  render () {
    return (
      <div className="container">
        <h1>Personal Kanban</h1>
        <form>
          <label htmlFor="noteContent">Note Content: </label>
          <input type="text" name="noteContent" id="noteContent" value={this.state.input} onChange={this.onInputChange}></input>
          <input type="radio" name="color" value="yellow"></input>Yellow
          <input type="radio" name="color" value="green"></input>Green
          <input type="radio" name="color" value="blue"></input>Blue
          <input type="radio" name="color" value="orange"></input>Orange
          <br />
          <input type="submit" value="Submit" onClick={this.addToDo}></input>
        </form>
        <div className="toDo box">
          {this.renderToDos()}
        </div>
      </div>
    )
  }
}

export default App;
