import React, { useState, useEffect } from "react";
// import { createNote } from "../Services/NoteServices";

const NoteForm = ({ onSave, existingNote, clearEdit }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    if (existingNote) setNote(existingNote);
  }, [existingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim() || !note.content.trim()) return;
    onSave(note);
    setNote({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter note title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          className="form-control"
          rows="4"
          placeholder="Enter note content"
          value={note.content}
          onChange={(e) =>
            setNote({ ...note, content: e.target.value })
          }></textarea>
      </div>
      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">
          {existingNote ? "Update" : "Add"} Note
        </button>
        {existingNote && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={clearEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
