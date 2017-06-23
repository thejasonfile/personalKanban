import React from 'react';

const NoteContainer = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.label}</h1>
      {props.children}
    </div>
  )
}

export default NoteContainer;
