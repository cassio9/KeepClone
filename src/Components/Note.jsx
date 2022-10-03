import { useState } from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import DeleteModal from "./DeleteModal";

function Note({ title, text, id, setDeleteModal, setDeleteId }) {
  function handleClickDelete(id) {
    setDeleteId(id);
    setDeleteModal(true);
  }

  return (
    <div id={id} className="note-container">
      <h6 className="note-title">{title}</h6>
      <p className="note-text">{text}</p>
      <p>{id}</p>
      <div className="toolbar">
        <img src={Edit} alt="a" width="30px" className="edit-toolbar" />
        <img
          src={Delete}
          alt="a"
          width="30px"
          id={id}
          onClick={(event) => handleClickDelete(event.target.id)}
        />
      </div>
    </div>
  );
}

export default Note;
