import React, { useState } from 'react';
import './style.css';
import Navbar from './Navbar';
import Form from './Form';
import Notes from './Notes';

export default function App() {
  const [addNew, setAddnew] = useState(false);
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [tags, setTags] = useState([]);
  const [singleNote, setSingleNote] = useState({});
  let [NotesArr, setNotesArr] = useState([]);

  function toggleAddNew() {
    setAddnew(true);
  }

  function clearState() {
    setTitle('');
    setParagraph('');
    setTags([]);
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleTags(e) {
    const t = e.target.value.split(',');
    setTags(t);
  }

  function handleTA(e) {
    setParagraph(e.target.value);
  }

  function handleSave() {
    const updatedNotes = [
      ...NotesArr,
      {
        title,
        paragraph,
        tags,
      },
    ];

    setNotesArr(updatedNotes);
    console.log(NotesArr);
    clearState;
    setAddnew(false);
  }

  function handleCancel() {
    setAddnew(false);
  }

  return (
    <div>
      <Navbar func={toggleAddNew} />
      <Form
        bool={addNew}
        handleTags={handleTags}
        handleTitle={handleTitle}
        handleTA={handleTA}
        handleSave={handleSave}
        handleCancel={handleCancel}
      />
      <Notes />
    </div>
  );
}
