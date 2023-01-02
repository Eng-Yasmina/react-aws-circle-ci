import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const getNotes = async () => {
      return await fetch(`${process.env.REACT_APP_API_URL}/api/notes`).then(
        (response) => response.json()
      );
    };

    getNotes()
      .then((json) => {
        setNotes(json.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      {notes && (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>🧵 {note.title}</h3>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
