import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import "./note.css";

function Note({ title, text, id, setDeleteModal, setItemId, setEditModal }) {
  function handleClickDelete(id) {
    setItemId(id);
    setDeleteModal(true);
  }

  function handleClickEdit(id) {
    setItemId(id);
    setEditModal(true);
  }

  return (
    <div className="note-container">
      <div className="noteText-container">
        <h6 className="note-title">{title}</h6>
        <p className="note-text">{text}</p>
      </div>
      <div className="toolbar">
        <img
          src={Edit}
          width="30px"
          className="edit-toolbar"
          id={id}
          onClick={(event) => handleClickEdit(event.target.id)}
        />
        <img
          src={Delete}
          width="30px"
          id={id}
          onClick={(event) => handleClickDelete(event.target.id)}
        />
      </div>
    </div>
  );
}

export default Note;
