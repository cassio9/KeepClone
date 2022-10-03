import { useForm } from "react-hook-form";

function EditModal({ setEditModal, itemId, notes, setNotes }) {
  const { register, handleSubmit } = useForm();

  function EditForm({ title, text }) {
    setNotes((prevNote) => {
      return [...prevNote].map((note) => {
        return note.id == itemId ? { ...note, title, text } : note;
      });
    });
    setEditModal(false);
  }

  console.log();

  return (
    <div className="form-container" data-id="form">
      <form
        className="form"
        onSubmit={handleSubmit(EditForm)}
        autoComplete="off"
      >
        <input
          type="text"
          placeholder={notes.find((note) => note.id == itemId).title}
          className="main-title"
          id="title"
          {...register("title")}
        />
        <input
          type="text"
          placeholder="Take a note..."
          className="main-input"
          name="text"
          value={notes.find((note) => note.id == itemId).text}
          {...register("text")}
          id="main-input"
        />
        <div id="form-buttons">
          <button type="submit" id="submit-button" data-id="form">
            Change
          </button>
          <button
            type="button"
            onClick={() => setEditModal(false)}
            id="form-close-button"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditModal;
