import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Initial from "./Components/InitialPlaceholder";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Note from "./Components/Note";
import DeleteModal from "./Components/DeleteModal";
import EditModal from "./Components/EditModal";

function App() {
  const [notes, setNotes] = useState([]);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isEditModal, setEditModal] = useState(false);
  const [itemId, setItemId] = useState("");

  const NotesHtml = notes.map((note) => {
    return (
      <Note
        key={nanoid()}
        title={note.title}
        text={note.text}
        id={note.id}
        setDeleteModal={setDeleteModal}
        setItemId={setItemId}
        setEditModal={setEditModal}
      />
    );
  });

  return (
    <div className="App">
      <main>
        <Header />
        <Form setNotes={setNotes} />
        <div className="layout-container">
          {notes[0] ? NotesHtml : <Initial />}
        </div>
        {isDeleteModal && (
          <DeleteModal
            setDeleteModal={setDeleteModal}
            itemId={itemId}
            setNotes={setNotes}
          />
        )}
        {isEditModal && (
          <EditModal
            setEditModal={setEditModal}
            itemId={itemId}
            setNotes={setNotes}
          />
        )}
      </main>
    </div>
  );
}

export default App;
