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
    <div className="modal-background">
      <div className="form-container" data-id="form">
        <form
          className="form"
          onSubmit={handleSubmit(EditForm)}
          autoComplete="off"
        >
          <input
            type="text"
            defaultValue={notes.find((note) => note.id == itemId).title}
            className="main-title"
            id="title"
            {...register("title")}
          />
          <textarea
            defaultValue={notes.find((note) => note.id == itemId).text}
            className="main-input"
            id="main-input"
            {...register("text")}
          ></textarea>

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
    </div>
  );
}

export default EditModal;
