import React from 'react'

const Message = (props) => {
  return (
    <div className="card mb-3">
    <div className="card-body">
    <h5 className="card-title">{props.user}</h5>
    <p className="card-text"><small className="text-muted">12:28pm</small></p>
      <p className="card-text">{props.message}</p>
   
    </div>
  </div>
  )
}

export default Message