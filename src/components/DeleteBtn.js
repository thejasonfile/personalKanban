import React from 'react';

const DeleteBtn = (props) => {
  return (
    <button onClick={() => {props.deleteToDo(props.id)}}>Delete</button>
  )
}

export default DeleteBtn;
