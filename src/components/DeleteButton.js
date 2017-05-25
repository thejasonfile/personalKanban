import React from 'react';

const DeleteButton = ({removeNote, noteNumber}) => {
  return (
    <div>
      <button onClick={() => removeNote(noteNumber)}>Delete</button>
    </div>
  )
};

export default DeleteButton;
