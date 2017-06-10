import React, { Component } from 'react';
import '../css/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDos : ['eat lunch', 'walk dog']
    };

    this.renderToDos = this.renderToDos.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  renderToDos() {
    let todos = this.state.toDos;
    let resultArray = [];
    todos.map((todo, i) => resultArray.push(<li key={i}>{todo}</li>));
    return resultArray;
  }

  addToDo(e) {
    e.preventDefault()
    console.log('submit clicked')
  }

  render () {
    return (
      <div className="container">
        <h1>Personal Kanban</h1>
        <form>
          <label htmlFor="noteContent">Note Content: </label>
          <input type="text" name="noteContent" id="noteContent"></input>
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
