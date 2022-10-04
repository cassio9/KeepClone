import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import Palette from "../assets/palette.png";
import { useState } from "react";
import "./note.css";

function Note({
  title,
  text,
  id,
  backColor,
  setDeleteModal,
  setEditModal,
  setNotes,
  setItemId,
}) {
  const [isPaletteModal, setPaletteModal] = useState(false);

  function handleDelete(id) {
    setItemId(id);
    setDeleteModal(true);
  }

  function handleEdit(id) {
    setItemId(id);
    setEditModal(true);
  }

  function changePaletteColor(color, id) {
    setNotes((prevNote) => {
      return [...prevNote].map((note) => {
        return note.id == id ? { ...note, backColor: color } : note;
      });
    });
  }

  return (
    <div className="note-container" style={{ backgroundColor: backColor }}>
      <div className="noteText-container">
        <h6 className="note-title">{title}</h6>
        <p className="note-text">{text}</p>
      </div>
      <div className="toolbar">
        <img
          src={Edit}
          className="edit-toolbar"
          id={id}
          onClick={(event) => handleEdit(event.target.id)}
        />
        <img
          src={Delete}
          className="edit-toolbar"
          id={id}
          onClick={(event) => handleDelete(event.target.id)}
        />
        <img
          src={Palette}
          className="edit-toolbar"
          id={id}
          onClick={() => setPaletteModal((prev) => !prev)}
        />
        <div className="palette-display">
          <div
            style={{ display: isPaletteModal ? "flex" : "none" }}
            className="palette-container"
          >
            <div
              id={id}
              onClick={(event) => changePaletteColor("white", event.target.id)}
              className="white palette"
            ></div>
            <div
              id={id}
              onClick={(event) =>
                changePaletteColor("#d7aefb", event.target.id)
              }
              className="purple palette"
            ></div>
            <div
              id={id}
              onClick={(event) =>
                changePaletteColor("#fbbd04ac", event.target.id)
              }
              className="orange palette"
            ></div>
            <div
              id={id}
              onClick={(event) =>
                changePaletteColor("#a7ffea98", event.target.id)
              }
              className="blueish palette"
            ></div>
            <div
              id={id}
              onClick={(event) =>
                changePaletteColor("#11ff0068", event.target.id)
              }
              className="green palette"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
