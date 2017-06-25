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
      toDos : [],
      error: ''
    };

    this.incrementId = this.incrementId.bind(this);
    this.createNewToDo = this.createNewToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.getIndex = this.getIndex.bind(this);
    this.changeToDoStatus = this.changeToDoStatus.bind(this);
    this.checkIfExstingCurrent = this.checkIfExstingCurrent.bind(this);
    this.renderToDoList = this.renderToDoList.bind(this);
  }

  //HELPER FUNCTIONS
  incrementId() {
    this.setState({currentId: this.state.currentId + 1})
  }

  getArray(status) {
    return this.state.toDos.filter((item) => {
      return item.status === status
    });
  }

  createNewToDo(content, color, status, id) {
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

  checkIfExstingCurrent() {
    var toDos = this.state.toDos;
    return toDos.some((todo) => todo.status === 'current')
  }

  changeToDoStatus(id, newStatus) {
    let existingCurrent = this.checkIfExstingCurrent()
    if((existingCurrent && newStatus === 'current')) {
      let error = 'You can have only one current ToDo'
      this.setState({error})
    } else {
      var index = this.getIndex(id);
      var toDos = this.state.toDos;
      var toDo = toDos.splice(index, 1);
      toDo[0].status = newStatus;
      toDos.splice(index, 0, toDo[0]);
      this.setState({toDos, error: ''});
    }
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
      <div className='container'>
        <div className='title'>
          <h1>Personal Kanban</h1>
        </div>
        <ContentForm
          input={this.state.input}
          createNewToDo={this.createNewToDo}
          currentId={this.state.currentId}
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
          <div className='error'>{this.state.error}</div>
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
