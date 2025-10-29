import axios from "axios";

const BASE_URL = "http://localhost:8080/api/notes";

const getAllNotes = async () => axios.get(BASE_URL);
const createNote = async (note) => axios.post(BASE_URL, note);
const updateNote = async (id, note) => axios.put(`${BASE_URL}/${id}`, note);
const deleteNote = async (id) => axios.delete(`${BASE_URL}/${id}`);

export default {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};
