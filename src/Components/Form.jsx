import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Form({ notes, setNotes }) {
  const [isType, setIsType] = useState("none");

  function displayForm() {
    setIsType("block");
  }

  function CloseForm() {
    setIsType("none");
  }

  document.body.addEventListener("click", (event) => {
    if (event.target.tagName != "FORM" && event.target.tagName != "INPUT") {
      CloseForm();
    }
  });

  return (
    <div className="form-container" onFocus={displayForm} data-id="form">
      <form className="form" autoComplete="off">
        <input
          type="text"
          placeholder="Title"
          className="main-title"
          onChange={handleChange}
          value={newNote.title}
          name="title"
          style={{ display: isType }}
        />
        <input
          type="text"
          placeholder="Take a note..."
          className="main-input"
          name="text"
          onChange={handleChange}
          value={newNote.text}
          id="main-input"
        />
        <div id="form-buttons" style={{ display: isType }}>
          <button type="button" id="submit-button" data-id="form">
            Submit
          </button>
          <button type="button" id="form-close-button">
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
