import { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

function Form({ setNotes }) {
  const [isType, setIsType] = useState("none");
  const { register, handleSubmit, reset } = useForm();

  function displayForm() {
    setIsType("block");
  }

  function CloseForm(event) {
    setIsType("none");
    event != "submit-button" && reset();
  }

  function submitForm(data) {
    setNotes((prevNote) => {
      return [...prevNote, { ...data, id: nanoid() }];
    });
    reset();
    CloseForm();
  }

  return (
    <div className="form-container" onFocus={displayForm} data-id="form">
      <form
        className="form"
        onSubmit={handleSubmit(submitForm)}
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="Title"
          className="main-title"
          id="title"
          {...register("title")}
          style={{ display: isType }}
        />
        <input
          type="text"
          placeholder="Take a note..."
          className="main-input"
          name="text"
          {...register("text")}
          id="main-input"
        />
        <div id="form-buttons" style={{ display: isType }}>
          <button type="submit" id="submit-button" data-id="form">
            Submit
          </button>
          <button type="button" onClick={CloseForm} id="form-close-button">
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
