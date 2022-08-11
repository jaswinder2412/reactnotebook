import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
  const host = "http://localhost:5000";
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

    const addNote= async (mynoter)=>{
       
      const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZTMxNzkwN2I4ZjQ1NDkxMjVjYmM5In0sImlhdCI6MTY2MDIwNjcwMX0.KcOxwVR-tWMlvjk_8LQ7F-GsDJtYnWM3PfIrfCcho2M'
        },
        body: JSON.stringify(mynoter)
    }

    console.log(config.body)
    const url = `${host}/api/notes/addnotes`
    const response = await fetch(url, config)
    const json = await response.json()
    console.log("mylog"+ JSON.parse(json))
        setnote(note.concat(JSON.parse(json)))
    }

    //Delete a Note
    const deleteNote= (id)=>{
      console.log("ss");
      const neswnote = note.filter((n)=>{return n._id!==id})
      setnote(neswnote)
    }

    // Edit a Not
    const updateNote= async (id,title,description,tag)=>{

      const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZTMxNzkwN2I4ZjQ1NDkxMjVjYmM5In0sImlhdCI6MTY2MDIwNjcwMX0.KcOxwVR-tWMlvjk_8LQ7F-GsDJtYnWM3PfIrfCcho2M'
        },
        body: JSON.stringify({title,description,tag})
    }
    const url = `${host}/api/notes/updatenotes/${id}`
    const response = await fetch(url, config)
    const json = await response.json()
 
      for(let index = 0; index < note.length; index++){
        const elements = note[index];
        if(elements._id===id){
          elements.title=title
          elements.description=description
          elements.tag=tag
        }

      }


    }
    

    return (
        <NoteContext.Provider value={{note , setnote,addNote,deleteNote,updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
