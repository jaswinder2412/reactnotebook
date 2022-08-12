import React,{useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
import AddaNotes from './AddaNotes';
import NoteItem from './NoteItem';


export default function Notes() {
    const Notes = useContext(noteContext)
    const {getNotes} = Notes;
   
    useEffect(()=>{
      getNotes()
    }
    ,[]);

  
  return (
    <div>
      <AddaNotes/>
      <h2>Your Notes</h2>
      <div className="container row">
      {Notes.note.map((note,key)=>{
       return  <NoteItem key={note._id} id={note._id} description={note.description} title={ note.title}/>

      })}
      </div>
      
    </div>
  )
}
