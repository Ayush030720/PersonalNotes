package com.example.demo.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.bean.Note;
import com.example.demo.repository.NoteRepository;

@Service
public class NotesService {
	
	@Autowired
	private NoteRepository noteRepository;
	
	//create Note
	public Note saveNote(Note note) {
		return noteRepository.save(note);
	}
	
	//Get all Notes
	public List<Note> getAllNotes(){
		return noteRepository.findAll();
	}
	
	//Get Single Note By Id
	public Optional<Note> getNoteById(String id){
		return noteRepository.findById(id);
	}
	
	//Delete Note By Id
	public void deleteNote(String id) {
		noteRepository.deleteById(id);
	}
	//Update the Note or Content
	public Note updateNote(String id, Note updateNotes) {
		return noteRepository.findById(id)
				.map(existingNote->{
					existingNote.setContent(updateNotes.getContent());
					existingNote.setTitle(updateNotes.getTitle());
					return noteRepository.save(existingNote);
				})
				.orElseThrow(()->new RuntimeException("Note not found with id " + id));
	}
}
