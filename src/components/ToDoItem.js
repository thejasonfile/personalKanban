import React from 'react';

const ToDoItem = (props) => {
  return (
    <li key={props.id} className={props.color}>{props.content}{props.children}</li>
  )
}

export default ToDoItem;
