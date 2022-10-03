function EditModal({ setEditModal, itemId, setNotes }) {
  const { register, handleSubmit } = useForm();

  function EditForm(data) {
    console.log(data);
    setEditModal(false);
  }

  return (
    <div className="form-container" data-id="form">
      <form
        className="form"
        onSubmit={handleSubmit(EditForm)}
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="Title"
          className="main-title"
          id="title"
          {...register("title")}
        />
        <input
          type="text"
          placeholder="Take a note..."
          className="main-input"
          name="text"
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
