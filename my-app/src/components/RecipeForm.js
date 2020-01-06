import React from 'react'

const RecipeForm = (props) => {

    return (
      <div className="RecipeForm">
        <form onSubmit={props.onSubmit}>
          <div className="field">
            <input 
            type='text' 
            placeholder='Enter Recipe Name' 
            value={props.name} name='name' 
            onChange={props.onChange}/>
            </div>
            <br/>
          <div>
            <input 
            type='text' 
            placeholder='Enter Instructions' 
            value={props.instructions} 
            name='instructions' 
            onChange={props.onChange}/>
            </div>
            <br/>
          <button type='submit'>Add Recipe</button>
        </form>
      </div>
    )
}

export default RecipeForm



