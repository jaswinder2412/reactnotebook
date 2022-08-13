import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const s1 = [];

  const [note, setnote] = useState(s1);
  const [userdetails, setuserdetails] = useState('');



  const getUsers = async () => {
    if(localStorage.getItem('token')){
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      };
  
      const url = `${host}/api/auth/userdetails`;
      const response = await fetch(url, config)
        .then((response) => response.json())
        .then((jsonData) => {
          return jsonData.auth_token;
        });
        setuserdetails(response);
    }
    
  };
  // Gtet a Note
  const getNotes = async () => {
    const config = {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    };

    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, config)
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData.notes;
      });
    setnote(response);
  };
  // Add a Note
  const addNote = async (mynoter) => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
      body: JSON.stringify(mynoter),
    };

    const url = `${host}/api/notes/addnotes`;
    const response = await fetch(url, config)
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData.note;
      });
    setnote(note.concat(response));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    const config = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
    };

    const url = `${host}/api/notes/deletenotes/${id}`;
    const response = await fetch(url, config)
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData;
      });
    console.log(response);
    const neswnote = note.filter((n) => {
      return n._id !== id;
    });
    setnote(neswnote);
  };

  // Edit a Not
  const updateNote = async (id, title, description, tag) => {
    const config = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
      body: JSON.stringify({title, description, tag}),
    };
 

    const url = `${host}/api/notes/updatenotes/${id}`;
    const response = await fetch(url, config)
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData.note;
      });

      let newNotes = JSON.parse(JSON.stringify(note))
      console.log(response); 
    for (let index = 0; index < newNotes.length; index++) {
      const elements = newNotes[index];
      if (elements._id === id) {
        elements.title = title;
        elements.description = description;
        elements.tag = tag;
        break;
      }
    }

    setnote(newNotes);


  };

  return (
    <NoteContext.Provider
      value={{ note, setnote, userdetails, getNotes,getUsers,  addNote, deleteNote, updateNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
