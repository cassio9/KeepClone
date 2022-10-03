import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Initial from "./Components/InitialPlaceholder";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Note from "./Components/Note";
import DeleteModal from "./Components/DeleteModal";

function App() {
  const [notes, setNotes] = useState([]);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const NotesHtml = notes.map((note) => {
    return (
      <Note
        key={nanoid()}
        title={note.title}
        text={note.text}
        id={nanoid()}
        setDeleteModal={setDeleteModal}
        setDeleteId={setDeleteId}
      />
    );
  });

  console.log(`deleteId : ${deleteId}`);
  return (
    <div className="App">
      <main>
        <Header />
        <Form notes={notes} setNotes={setNotes} />
        {notes[0] ? NotesHtml : <Initial />}
        {isDeleteModal && (
          <DeleteModal
            setDeleteModal={setDeleteModal}
            deleteId={deleteId}
            setNotes={setNotes}
          />
        )}
      </main>
    </div>
  );
}

export default App;
