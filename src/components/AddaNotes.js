import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddaNotes() {
    const Notes = useContext(noteContext)
   const {addNote} = Notes;

   const handleclick = (e)=>{
    e.preventDefault()
    
    addNote(note)
   }  
   
   const [note,setnote] = useState({title:"",description:"", tags:""})
   const onchnge = (e)=>{
        setnote({...note,[e.target.name]:e.target.value})
   }
  return (
    <div>
        <div className='container text-left'>
        <h2>Add a Note</h2>
        <form>
  <div className="form-group">
    <label htmlFor="exampleInputtitle">Title</label>
    <input type="text" name="title" className="form-control" onChange={onchnge}  id="exampleInputtitle" aria-describedby="emailHelp" placeholder="Enter title"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputDesc">Desc</label>
    <input type="text" className="form-control" name="description" onChange={onchnge}  id="exampleInputDesc" placeholder="description"/>
  </div>
   
  <button type="button" onClick={handleclick} className="btn btn-primary mt-5">Add Note</button>
</form>

      </div>
    </div>
  )
}
