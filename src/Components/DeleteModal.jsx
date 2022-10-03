import "./deleteModal.css";

function DeleteModal({ setDeleteModal, deleteId, setNotes }) {
  function handleDelete() {
    setNotes((prevNote) => {
      console.log(`id state: ${deleteId} id - ${prevNote.id}`);
      return [...prevNote].filter((note) => note.id !== deleteId);
    });
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
