import "../css/Modal.css";

function DeleteModal({ setDeleteModal, itemId, setNotes }) {
  function handleDelete() {
    setNotes((prevNote) => {
      return [...prevNote].filter((note) => note.id !== itemId);
    });
    setDeleteModal(false);
  }

  return (
    <div className="modal-background" onClick={() => setDeleteModal(false)}>
      <div className="modal-container">
        <div className="close-btn">
          <button
            className="close-btn-modal"
            onClick={() => setDeleteModal(false)}
          >
            {"\u2715"}
          </button>
        </div>
        <h1>Are you sure you want to delete this note?</h1>
        <div>
          <button
            type="button"
            className="btn"
            onClick={() => setDeleteModal(false)}
          >
            Cancel
          </button>
          <button type="button" className="btn" onClick={handleDelete}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
