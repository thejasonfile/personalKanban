import React from 'react';

const ToDoItem = (props) => {
  return (
    <div className='noteContent'>
      <li key={props.id} className={props.color}>{props.content}</li>
      <div className='noteButtons'>
        {props.children}
      </div>
    </div>
  )
}

export default ToDoItem;
