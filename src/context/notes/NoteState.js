import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const s1 = [
        {
          "_id": "62f01cb376427592b8998dc1",
          "user": "62ee317907b8f4549125cbc9",
          "title": "My title",
          "description": "utho jldi",
          "tag": "personal",
          "date": "2022-08-07T20:12:35.714Z",
          "__v": 0
        },
        {
          "_id": "62f01cc276427592b8998dc4",
          "user": "62ee317907b8f4549125cbc9", 
          "title": "My titlesdsdsdsd",
          "description": "uthddssdsdsdo jldi",
          "tag": "personal",
          "date": "2022-08-07T20:12:50.376Z",
          "__v": 0
        }
      ]

    const [note,setnote] = useState(s1)

    // Add a Note

    const addNote= (title,description,tag)=>{
     const newnote=  {
          "_id": "62f01cc276427592b8998dc4",
          "user": "62ee317907b8f4549125cbc9", 
          "title": "My titlesdsdsdsd",
          "description": "uthddssdsdsdo jldi",
          "tag": "personal",
          "date": "2022-08-07T20:12:50.376Z",
          "__v": 0
        };
        setnote(note.concat(newnote))
    }

    //Delete a Note
    const deleteNote= ()=>{

    }
    // Edit a Not
    const updateNote= ()=>{

    }
    

    return (
        <NoteContext.Provider value={{note , setnote,addNote,deleteNote,updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
