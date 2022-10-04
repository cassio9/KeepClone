import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import "../css/Form.css";
function Form({ setNotes, isType, setIsType }) {
  const { register, handleSubmit, reset } = useForm();

  function submitForm(data) {
    if (!data.title && !data.text) {
      alert("Empty note! please, take a note...");
      return;
    }
    setNotes((prevNote) => {
      return [...prevNote, { ...data, id: nanoid(), backColor: "white" }];
    });
    reset();
    setIsType(false);
  }

  return (
    <div className="form-container" onFocus={() => setIsType(true)}>
      <form
        className="form"
        onSubmit={handleSubmit(submitForm)}
        autoComplete="off"
      >
        {!isType ? (
          <input
            placeholder="Take a note..."
            className="main-input"
            {...register("text")}
          />
        ) : (
          <>
            <input
              placeholder="Title"
              className="main-title"
              autoFocus
              {...register("title")}
              style={{ display: isType ? "block" : "none" }}
            />
            <textarea
              placeholder="Take a note..."
              className="main-input"
              id="main-input"
              {...register("text")}
            ></textarea>
          </>
        )}

        <div id="form-buttons" style={{ display: isType ? "block" : "none" }}>
          <button type="submit" id="submit-button" data-id="form">
            Submit
          </button>
          <button
            type="button"
            onClick={() => {
              setIsType(false);
              reset();
            }}
            id="form-close-button"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
