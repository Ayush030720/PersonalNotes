import "./App.css";
import NoteList from "./Components/NoteList"; // ✅ lowercase "components" (important on Linux/macOS)

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Personal Notes</h1>
      <NoteList />
    </div>
  );
}

export default App;
