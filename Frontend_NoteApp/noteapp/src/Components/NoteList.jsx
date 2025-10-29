import React from "react";
import NoteCard from "./NoteCard";
const NoteList = ({ notes, onEdit, onDelete }) => {
  if (notes.length === 0) {
    return (
      <p className="text-center text-muted mt-4">No notes yet. Start adding!</p>
    );
  }
  return (
    <div className="row">
     {notes && notes.map((note) =>
  note ? (
    <div className="col-md-6 col-lg-4 mb-4" key={note._id}>
      <NoteCard note={note} onEdit={onEdit} onDelete={onDelete} />
    </div>
  ) : null
)}
    </div>
  );
};

export default NoteList;
