import React, { useState } from 'react';

function Navbar(props) {

  return (
    <div className="nav-container">
      <h1>Notes</h1>
      <button id="addNew" onClick={props.func}>
        Add New
      </button>
    </div>
  );
}

export default Navbar;
