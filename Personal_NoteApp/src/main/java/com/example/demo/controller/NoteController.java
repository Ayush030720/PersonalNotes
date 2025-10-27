package com.example.demo.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.bean.Note;
import com.example.demo.service.NotesService;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin("*") // Allow React frontend to access backend
public class NoteController {

    @Autowired
    private NotesService noteService;

    // ✅ Create a new note
    @PostMapping
    public ResponseEntity<Note> createNote(@RequestBody Note note) {
        Note savedNote = noteService.saveNote(note);
        return ResponseEntity.ok(savedNote);
    }

    // ✅ Get all notes
    @GetMapping
    public ResponseEntity<List<Note>> getAllNotes() {
        List<Note> notes = noteService.getAllNotes();
        return ResponseEntity.ok(notes);
    }

    // ✅ Get a note by ID
    @GetMapping("/{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable String id) {
        return noteService.getNoteById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ Update a note
    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable String id, @RequestBody Note note) {
        try {
            Note updatedNote = noteService.updateNote(id, note);
            return ResponseEntity.ok(updatedNote);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ Delete a note
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNoteById(@PathVariable String id) {
        noteService.deleteNote(id);
        return ResponseEntity.noContent().build();
    }
}

