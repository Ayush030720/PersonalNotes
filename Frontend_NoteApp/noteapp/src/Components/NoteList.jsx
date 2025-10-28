import { useEffect, useState } from "react";
import { getAllNotes, deleteNote } from "../Services/NoteServices";
import NoteForm from "./NoteForm";

function NoteList() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await getAllNotes();
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="note-container">
      <h2>📝 My Notes</h2>
      <NoteForm onNoteAdded={fetchNotes} />
      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <h4>{note.title}</h4>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.id)}>🗑 Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
