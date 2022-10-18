import { useForm } from "react-hook-form";

function EditModal({ setEditModal, itemId, setNotes, notes }) {
  const { register, handleSubmit } = useForm();

  function EditForm({ title, text }) {
    setNotes((prevNote) => {
      return prevNote.map((note) => {
        return note.id == itemId ? { ...note, title, text } : note;
      });
    });
    setEditModal(false);
  }

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
            <button className="editModal-btn" type="submit" data-id="form">
              Change
            </button>
            <button
              className="editModal-btn"
              type="button"
              onClick={() => setEditModal(false)}
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
