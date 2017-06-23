import React, { Component } from 'react';
import '../assets/css/app.css';

import ContentForm from './ContentForm';
import NoteContainer from './NoteContainer';
import ToDoItem from './ToDoItem';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: 0,
      input : '',
      selectedColor: 'yellow',
      toDos : [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.incrementId = this.incrementId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createToDo = this.createToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.getIndex = this.getIndex.bind(this);
    this.changeToDoStatus = this.changeToDoStatus.bind(this);
    this.renderToDoList = this.renderToDoList.bind(this);
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

  getArray(status) {
    return this.state.toDos.filter((item) => {
      return item.status === status
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let content = this.state.input;
    let color = this.state.selectedColor;
    this.createToDo(content, color, 'open', this.state.currentId);
  }

  createToDo(content, color, status, id) {
    let toDos = this.state.toDos;
    toDos.push({
      content,
      color,
      id,
      status
    });
    this.setState({toDos});
    this.incrementId();
  }

  deleteToDo(id) {
    let newtoDos = this.state.toDos.filter((todo) => {
      return todo.id !== id
    });
    this.setState({toDos: newtoDos})
  }

  getIndex(id) {
    return this.state.toDos.findIndex((item) => item.id === id);
  }

  changeToDoStatus(id, newStatus) {
    var index = this.getIndex(id);
    var toDos = this.state.toDos;
    var toDo = toDos.splice(index, 1);
    toDo[0].status = newStatus;
    toDos.splice(index, 0, toDo[0]);
    this.setState({toDos});
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
            <Button
              id={todo.id}
              handleClick={this.changeToDoStatus}
              newStatus={'current'}
            >
            Make Current
            </Button>
            <Button
              id={todo.id}
              handleClick={this.changeToDoStatus}
              newStatus={'complete'}
            >
              Complete
            </Button>
            <Button
              id={todo.id}
              handleClick={this.deleteToDo}
            >
              Delete
            </Button>
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
            <Button
              id={todo.id}
              handleClick={this.changeToDoStatus}
              newStatus={'complete'}
            >
              Complete
            </Button>
            <Button
              id={todo.id}
              handleClick={this.deleteToDo}
            >
              Delete
            </Button>
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
            <Button
              id={todo.id}
              handleClick={this.changeToDoStatus}
              newStatus={'current'}
            >
            Make Current
            </Button>
            <Button
              id={todo.id}
              handleClick={this.deleteToDo}
            >
              Delete
            </Button>
          </ToDoItem>
        )
      })
    }
  }

  render () {
    return (
      <div className="container">
        <h1>Personal Kanban</h1>
        <ContentForm
          input={this.state.input}
          handleInputChange={this.onInputChange}
          handleColorChange={this.onColorChange}
          handleSubmit={this.handleSubmit}
        >
        </ContentForm>
        <NoteContainer
          className='toDo box'
          label='To Dos'
        >
          {this.renderToDoList('open')}
        </NoteContainer>
        <NoteContainer
          className='currentToDo box'
          label='Current To Do'
        >
          {this.renderToDoList('current')}
        </NoteContainer>
        <NoteContainer
          className='completedToDo box'
          label='Completed'
        >
          {this.renderToDoList('complete')}
        </NoteContainer>
      </div>
    )
  }
}

export default App;
