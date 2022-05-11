import React from 'react'

const Channel = (props) => {
    let {id, name} = props;
    return (
        <>
           <a href={id} class="w3-bar-item w3-button">{name}</a>
        </>
    )
}

export default Channel