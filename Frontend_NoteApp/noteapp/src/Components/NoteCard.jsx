import React from "react";

const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <div className="card shadow-sm h-100 border-0">
      <div className="card-body">
        <h5 className="card-title text-primary">{note.title}</h5>
        <p className="card-text text-muted">{note.content}</p>
      </div>
      <div className="card-footer bg-white d-flex justify-content-between">
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => onEdit(note)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => onDelete(note._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
