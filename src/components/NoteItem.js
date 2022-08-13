import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const Notes = useContext(noteContext);
  const { deleteNote } = Notes;


  const { note, updateNote } = props;

  return (
    <div className="col-md-4 mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <i
            className="fa fa-trash"
            onClick={() => {
              deleteNote(props.id);
            }}
          ></i>{" "}
          <i
            className="fa-solid   fa-pen-to-square mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
