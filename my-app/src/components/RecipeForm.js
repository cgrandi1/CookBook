import React from 'react'
import Button from 'react-bootstrap/Button';

const RecipeForm = (props) => {

    return (
      <div className="RecipeForm">
        <form onSubmit={props.onSubmit}>
          <div className="field">
            <input 
            type='text' 
            placeholder='Enter Recipe Name' 
            value={props.name} 
            name='name' 
            onChange={props.onChange}/>
            </div>
            <br/>
          <div>
            <textarea 
            type='text' 
            placeholder='Enter Instructions' 
            value={props.instructions} 
            name='instructions' 
            onChange={props.onChange}/>
            </div>
            <br/>
            <div>
            <input 
            type='text' 
            placeholder='Enter Ingredients' 
            value={props.ingredients} 
            name='ingredients' 
            onChange={props.onChange}/>
            </div>
            <br />
            <div>
            <input 
            type='text' 
            placeholder='Enter Cook Time' 
            value={props.time} 
            name='time' 
            onChange={props.onChange}/>
            </div>
          <Button variant="success" type='submit'>Add Recipe</Button>
        </form>
      </div>
    )
}

export default RecipeForm



