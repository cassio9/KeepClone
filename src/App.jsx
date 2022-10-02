import { useState } from "react";

import "./App.css";
import Initial from "./Components/InitialPlaceholder";
import Header from "./Components/Header";
import Form from "./Components/Form";

function App() {
  const [notes, setNotes] = useState(0);

  return (
    <div className="App">
      <main>
        <Header />
        <Form notes={notes} setNotes={setNotes} />
        {notes ? "" : <Initial />}
      </main>
    </div>
  );
}

export default App;
