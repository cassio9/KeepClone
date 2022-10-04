import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Initial from "./Components/InitialPlaceholder";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Note from "./Components/Note";
import DeleteModal from "./Components/DeleteModal";
import EditModal from "./Components/EditModal";
import "./css/App.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("KeepClone")) || []
  );
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isEditModal, setEditModal] = useState(false);
  const [itemId, setItemId] = useState("");
  const [isType, setIsType] = useState(false);

  useEffect(() => {
    localStorage.setItem("KeepClone", JSON.stringify(notes));
  }, [notes]);

  const NotesHtml = notes.map((note) => {
    return (
      <Note
        key={nanoid()}
        title={note.title}
        text={note.text}
        id={note.id}
        backColor={note.backColor}
        setDeleteModal={setDeleteModal}
        setEditModal={setEditModal}
        setNotes={setNotes}
        setItemId={setItemId}
      />
    );
  });

  return (
    <div className="App">
      <main>
        <Header />
        <Form setNotes={setNotes} isType={isType} setIsType={setIsType} />
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
            notes={notes}
          />
        )}
      </main>
    </div>
  );
}

export default App;
