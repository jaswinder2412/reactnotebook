import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import AddaNotes from "./AddaNotes";
import NoteItem from "./NoteItem";
import { useNavigate } from 'react-router-dom';

export default function Notes() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const refclose = useRef(null);
  const Notes = useContext(noteContext);
  const { getNotes, note, updateNote } = Notes;
  const [noteas, setnoteas] = useState({
    e_id: "",
    e_title: "",
    e_description: "",
    e_tags: "",
  });

  
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  
  
  const updateNoteclick = (currentnote) => {
    ref.current.click(); 
    setnoteas({e_id:currentnote._id, e_title:currentnote.title, e_description:currentnote.description, e_tags:currentnote.tag})
   
  };

  const handleclick = (e) => {
    e.preventDefault(); 
    updateNote(noteas.e_id, noteas.e_title, noteas.e_description, noteas.e_tags)

    refclose.current.click();

  }; 
  const onchnge = (e) => { 
    setnoteas({ ...noteas, [e.target.name]: e.target.value });
  };

  if(!localStorage.getItem('token')){
    navigate('/login');
  }else {
  

  return (
    <div>
      <AddaNotes />
      <h2 className="mt-4">Your Notes</h2>
      <div className="container ">
        <button
          type="button"
          ref={ref}
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          .
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  ref={refclose}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputtitlemy">Title</label>
                    <input
                      type="text"
                      name="e_title"
                      className="form-control"
                      onChange={onchnge}
                      id="exampleInputtitlemy"
                      placeholder="Enter title"
                      value={noteas.e_title} 
              minLength={5}
              required
                    />
                   
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputDescmy">Desc</label>
                    <input
                      type="text"
                      className="form-control"
                      name="e_description"
                      onChange={onchnge}
                      id="exampleInputDescmy"
                      placeholder="description"
                      value={noteas.e_description}
                      minLength={5}
                      required
                    />
                  </div>

                  <div className="form-group">
            <label htmlFor="exampleInputDesc">tag</label>
            <input
              type="text"
              className="form-control"
              name="e_tags"
              onChange={onchnge}
              id="exampleInputtagmy"
              placeholder="tag"
              value={noteas.e_tags}
            />

          </div>

                  <button
                   disabled={noteas.e_title.length<5 || noteas.e_description.length < 5}
                    type="button"
                    onClick={handleclick}
                    className="btn btn-primary mt-5"
                  >
                    Update Note
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        {note.length===0 && "No Notes to display"}
        {note.map((note, key) => {
          return (
            <NoteItem
              note={note}
              key={note._id}
              id={note._id}
              updateNote={updateNoteclick}
              description={note.description}
              title={note.title}
            />
          );
        })}
        </div>
      </div>
    </div>
  );
}
}
