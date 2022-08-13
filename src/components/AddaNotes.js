import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function AddaNotes() {
  const Notes = useContext(noteContext);
  const { addNote } = Notes;
 
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const onchnge = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleclick = (e) => {
    e.preventDefault();

    addNote(note);
    setnote({ title: "", description: "", tag: "" });
  };

  return (
    <div>
      <div className="container text-left">
        <h2>Add a Note</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputtitle">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={onchnge}
              id="exampleInputtitle"
              aria-describedby="emailHelp"
              placeholder="Enter title"
              value={note.title}
              minLength={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputDesc">Desc</label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={onchnge}
              id="exampleInputDesc"
              placeholder="description"
              value={note.description}
              minLength={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputDesc">tag</label>
            <input
              type="text"
              className="form-control"
              name="tag"
              onChange={onchnge}
              id="exampleInputtag"
              value={note.tag}
              placeholder="tag"
            />
          </div>

          <button

          disabled={note.title.length<5 || note.description.length < 5}
            type="button"
            onClick={handleclick}
            className="btn btn-primary mt-5"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}
