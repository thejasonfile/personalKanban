import React from 'react';

const DeleteButton = ({removeNote, noteNumber}) => {
  return (
      <button onClick={() => removeNote(noteNumber)}>Delete</button>
  )
};

export default DeleteButton;
