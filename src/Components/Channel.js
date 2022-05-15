import React from 'react'

const Channel = (props) => {
    let {id, name} = props;
    return (
        <>
        <div className="Channel">
        <a href={id} className="w3-bar-item w3-button">{name}</a>
        </div>
      
        
        </>
    )
}

export default Channel