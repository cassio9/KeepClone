import "./deleteModal.css";

function DeleteModal({ setDeleteModal, itemId, setNotes }) {
  function handleDelete() {
    setNotes((prevNote) => {
      return [...prevNote].filter((note) => note.id !== itemId);
    });
    setDeleteModal(false);
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="close-btn">
          <button onClick={() => setDeleteModal(false)}>X</button>
        </div>
        <h1>Are you sure you want to delete this note?</h1>
        <button type="button" onClick={() => setDeleteModal(false)}>
          Cancel
        </button>
        <button type="button" onClick={handleDelete}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
