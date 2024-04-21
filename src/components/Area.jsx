import React, { useState } from "react";

function Area(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Check if both title and content are provided
    if (note.title.trim() === "" || note.content.trim() === "") {
      // Display an error message or handle the case where title or content is empty
      return;
    }

    // Call the onAdd function passed from the parent component (App.jsx)
    props.onAdd(note);

    // Reset the note state to clear the form fields
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default Area;
