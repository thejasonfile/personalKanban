import React from 'react';

const ContentForm = (props) => {
  return (
    <form>
      <label htmlFor="noteContent">Note Content: </label>
      <input type="text" name="noteContent" id="noteContent" value={props.input} onChange={props.handleInputChange}></input>
      <input type="radio" name="color" value="yellow" onChange={props.handleColorChange}></input>Yellow
      <input type="radio" name="color" value="green" onChange={props.handleColorChange}></input>Green
      <input type="radio" name="color" value="blue" onChange={props.handleColorChange}></input>Blue
      <input type="radio" name="color" value="orange" onChange={props.handleColorChange}></input>Orange
      <br />
      <input type="submit" value="Submit" onClick={props.handleSubmit}></input>
    </form>
  )
}

export default ContentForm;
