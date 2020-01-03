import React from 'react';

// import { connect } from 'react-redux';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal'
// import FormGroup from 'react-bootstrap/FormGroup'
// import FormControl from 'react-bootstrap/FormControl'


const RecipeForm = props => {
 
  return (
    <div>
      <h3 className="recipeForm">Create a New Recipe</h3>

    <form onSubmit={props.handleOnSubmit}>
      <div>
        <p htmlFor="name">Name:</p>
        <input
          placeholder="enter recipe name"
          type="text"
          onChange={props.handleOnChange}
          name="name"
          value={props.recipe.name}
        />
      </div>

      <div>
        <p htmlFor="instructions">Instructions:</p>
        <textarea
          type="textarea"
          placeholder="enter"
          onChange={props.onChange}
          name="ingredients"
          value={props.recpe.instructions}
        />
      </div>


        <button type="submit">Add Recipe</button>
    </form>
    </div>
  )
}

// const mapStateToProps = ({ recipe }) => ({ recipe })

export default RecipeForm;






