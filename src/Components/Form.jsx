import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import "./form.css";
function Form({ setNotes, isType, setIsType }) {
  const { register, handleSubmit, reset } = useForm();

  function displayForm() {
    setIsType(true);
  }

  function CloseForm() {
    setIsType(false);
    reset();
  }

  function submitForm(data) {
    if (!data.title && !data.text) {
      alert("Empty note! please, take a note...");
      return;
    }
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
        {!isType ? (
          <input
            placeholder="Take a note..."
            className="main-input"
            name="text"
            {...register("text")}
          />
        ) : (
          <>
            <input
              type="text"
              placeholder="Title"
              className="main-title"
              id="title"
              autoFocus
              {...register("title")}
              style={{ display: isType ? "block" : "none" }}
            />
            <textarea
              placeholder="Take a note..."
              className="main-input"
              name="text"
              {...register("text")}
              id="main-input"
            ></textarea>
          </>
        )}

        <div id="form-buttons" style={{ display: isType ? "block" : "none" }}>
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
