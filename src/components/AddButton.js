import React from 'react';

const AddButton = ({state, addNote, noteState}) => {
  return (
    <div>
      <button onClick={() => addNote({key: state.toDoNotes.length, content: noteState.noteContent, color: noteState.selectedColor})} >+</button>
    </div>
  )
};

export default AddButton;
