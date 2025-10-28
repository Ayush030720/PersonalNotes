import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/notes';

export const getAllNotes = () => axios.get(BASE_URL);
export const createNote = (note) => axios.post(BASE_URL, note);
export const deleteNote = (id) => axios.delete(`${BASE_URL}/${id}`);
export const updateNote = (id, note) => axios.put(`${BASE_URL}/${id}`, note);
