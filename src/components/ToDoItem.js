import React from 'react';

const ToDoItem = (props) => {
  let allClasses = `noteContent ${props.color}`
  return (
    <div className={allClasses} >
      <li key={props.id}>{props.content}</li>
      <div className='noteButtons'>
        {props.children}
      </div>
    </div>
  )
}

export default ToDoItem;
