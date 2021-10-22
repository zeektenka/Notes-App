import React, { useState } from 'react';

function Form(props) {
  return (
    <div className={props.bool ? 'form-container' : 'hidden'} id="inputForm">
      <input onChange={props.handleTitle} type="text" placeholder="Title" />
      <textarea
        onChange={props.handleTA}
        name="text-area"
        id="text-area"
        cols="30"
        rows="10"
        placeholder="Enter your notes..."
      ></textarea>
      <input
        onChange={props.handleTags}
        type="text"
        placeholder="Tags (Comma Separated)"
      />
      <div>
        <button onClick={props.handleSave} id="save-btn">
          Save
        </button>
        <button onClick={props.handleCancel} id="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Form;
