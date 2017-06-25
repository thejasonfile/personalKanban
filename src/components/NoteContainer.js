import React from 'react';

const NoteContainer = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.label}</h1>
        <div className='notes'>
          {props.children}
        </div>
    </div>
  )
}

export default NoteContainer;
