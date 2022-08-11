import React from 'react'

export default function NoteItem(props) {
  return (
    <div className='col-md-4'>
      <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5> 
    <p className="card-text">{props.description}</p> 
    <i className='fa fa-trash'></i> <i className="fa-solid fa-pen-to-square mx-2"></i>
  </div>
</div>
    </div>
  )
}
