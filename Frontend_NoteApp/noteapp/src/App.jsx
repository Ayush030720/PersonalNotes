import React, { useState, useEffect } from "react";
import NoteList from "./Components/NoteList";
import NoteForm from "./Components/NoteForm";
import noteService from "./Services/NoteServices";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

 const fetchNotes = async () => {
  const res = await noteService.getAllNotes();
  setNotes(res.data); // ✅ FIXED
};


  const handleAddOrUpdate = async (note) => {
    if (editingNote) {
      await noteService.updateNote(editingNote.id, note);
    } else {
      await noteService.createNote(note);
    }
    setEditingNote(null);
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await noteService.deleteNote(id);
    fetchNotes();
  };

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary display-5 mb-3">
            📝 Personal Notes App
          </h1>
          <p className="text-muted fs-5">
            Capture your thoughts, ideas, and plans with ease.
          </p>
        </div>

        {/* Main Content */}
        <div className="row g-4">
          {/* Left Column - Form */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body">
                <h5 className="card-title text-center text-primary mb-4">
                  {editingNote ? "✏️ Edit Note" : "➕ Add New Note"}
                </h5>
                <NoteForm
                  onSave={handleAddOrUpdate}
                  existingNote={editingNote}
                  clearEdit={() => setEditingNote(null)}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Notes List */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body">
                <h5 className="card-title text-center text-success mb-4">
                  📋 Your Notes
                </h5>
                <NoteList
                  notes={notes}
                  onEdit={setEditingNote}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-5 text-muted small">
          Made with ❤️ using React & Bootstrap
        </footer>
      </div>
    </div>
  );
}

export default App;
