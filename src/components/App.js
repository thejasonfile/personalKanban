import React, { Component } from 'react';
import '../assets/css/app.css';

import ToDoItem from './ToDoItem';
import MakeCurrentBtn from './MakeCurrentBtn';
import DeleteBtn from './DeleteBtn';
import CompleteBtn from './CompleteBtn';

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
    this.changeToDoStatus = this.changeToDoStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //HELPER FUNCTIONS
  onInputChange(e) {
    this.setState({input: e.target.value});
  }

  onColorChange(e) {
    this.setState({selectedColor: e.target.value})
  }

  incrementId() {
    this.setState({currentId: this.state.currentId + 1})
  }

  getSelectedTodo(id) {
    return this.state.toDos.filter((item) => {
      return item.id === id
    });
  }

  getArray(status) {
    return this.state.toDos.filter((item) => {
      return item.status === status
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let content = this.state.input;
    let color = this.state.selectedColor;
    this.createToDo(content, color, 'open');
  }

  createToDo(content, color, status) {
    let toDos = this.state.toDos;
    toDos.push({
      content,
      color,
      id: this.state.currentId,
      status
    });
    this.setState({toDos});
    this.incrementId();
  }

  deleteToDo(id) {
    let toDos = this.state.toDos.filter((item) => {
      return item.id !== id
    });
    this.setState({toDos})
  }

  changeToDoStatus(id, newStatus) {
    let selectedToDo = this.getSelectedTodo(id);
    debugger;
    this.deleteToDo(id);
    this.createToDo(selectedToDo[0].content, selectedToDo[0].color, newStatus);
  }

  //RENDER FUNCTIONS
  renderToDoList(status) {
    let toDoList = this.getArray(status);
    if (status === 'open') {
      return toDoList.map((todo) => {
        return (
          <ToDoItem
            key={todo.id}
            color={todo.color}
            content={todo.content}
          >
            <MakeCurrentBtn id={todo.id} changeStatus={this.changeToDoStatus}/>
            <CompleteBtn id={todo.id} changeStatus={this.changeToDoStatus}/>
            <DeleteBtn id={todo.id}/>
          </ToDoItem>
        )
      })
    }
    else if (status === 'current') {
      return toDoList.map((todo) => {
        return (
          <ToDoItem
            key={todo.id}
            color={todo.color}
            content={todo.content}
          >
            <CompleteBtn id={todo.id} changeStatus={this.changeToDoStatus}/>
            <DeleteBtn id={todo.id}/>
          </ToDoItem>
        )
      })
    }
    else {
      return toDoList.map((todo) => {
        return (
          <ToDoItem
            key={todo.id}
            color={todo.color}
            content={todo.content}
          >
            <MakeCurrentBtn id={todo.id} changeStatus={this.changeToDoStatus}/>
            <DeleteBtn id={todo.id}/>
          </ToDoItem>
        )
      })
    }
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
          <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
        </form>
        <div className="toDo box">
          <h1>To Dos</h1>
          {this.renderToDoList('open')}
        </div>
        <div className="currentToDo box">
          <h1>Current To Do</h1>
          {this.renderToDoList('current')}
        </div>
        <div className="completedToDo box">
          <h1>Completed</h1>
          {this.renderToDoList('complete')}
        </div>
      </div>
    )
  }
}

export default App;
