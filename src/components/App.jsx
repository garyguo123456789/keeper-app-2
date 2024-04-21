import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Area from "./Area";

function App() {
  const [notesArray, setNotesArray] = useState([]);

  // Fetch notes from the backend on component mount
  useEffect(() => {
    fetch("http://localhost:5000/api/notes")
      .then((response) => response.json())
      .then((data) => setNotesArray(data))
      .catch((err) => console.error("Error loading notes:", err));
  }, []);

  function addNote(newNote) {
    fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then((data) => {
        setNotesArray((prevNotes) => [...prevNotes, data]);
      })
      .catch((err) => console.error("Error adding note:", err));
  }

  function removeNote(id) {
    fetch(`http://localhost:5000/api/notes/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setNotesArray((prevNotes) =>
            prevNotes.filter((note) => note._id !== id)
          );
        }
      })
      .catch((err) => console.error("Error removing note:", err));
  }

  return (
    <div>
      <Header />
      <Area onAdd={addNote} />
      {notesArray.map((note) => (
        <Note
          key={note._id} // It's important to use a unique key, not index
          id={note._id}
          title={note.title}
          content={note.content}
          onDelete={() => removeNote(note._id)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
