import React from 'react'

const Recipe = ({name,instructions}) => {
    return(
        <div>
            <h1>{name}</h1>
            <p>{instructions}</p>
        </div>
    )
}

export default Recipe;