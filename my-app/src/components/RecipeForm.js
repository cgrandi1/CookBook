import React from 'react'
import Button from 'react-bootstrap/Button';

const RecipeForm = (props) => {
  console.log(4)

  return (
    <div className="RecipeForm">
      <form onSubmit={props.onSubmit}>
        <div className="field">
          <input
            type='text'
            placeholder='Enter Recipe Name'
            value={props.name}
            name='name'
            onChange={props.onChange} />
        </div>
        <br />
        <div>
          <textarea
            type='text'
            placeholder='Enter Instructions'
            value={props.instructions}
            name='instructions'
            onChange={props.onChange} />
        </div>
        <br />
        <div>
          <input
            type='text'
            placeholder='Enter Ingredients'
            value={props.ingredients}
            name='ingredients'
            onChange={props.onChange} />
        </div>
        <br />
        <div>
          <input
            type='text'
            placeholder='Enter Cook Time'
            value={props.time}
            name='time'
            onChange={props.onChange} />
        </div>
        <br />
        <input
          type="submit"
          className="btn btn-primary"
          value={props.button? "Edit Recipe" : "Add Recipe"} />
      </form>
    </div>
  )
}

export default RecipeForm



