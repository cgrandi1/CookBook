import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createRecipe} from '../actions/RecipeActions';
import { updateRecipes } from '../actions/updateRecipes'


// import { connect } from 'react-redux';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal'
// import FormGroup from 'react-bootstrap/FormGroup'
// import FormControl from 'react-bootstrap/FormControl'


class RecipeForm extends Component {
  // state = {
  //   recipes: {
  //     name: "",
  //     instructions: []
  //   },
  //   saving: false,
  //   // isOpen: false
  // }
 
  handleOnSubmit = e => {
    e.preventDefault();
    const { createRecipe, history} = this.props;
		createRecipe(history);
  }


  handleOnChange = (e) => {
    const {name, value} = e.target;

    const newValues = { [name] : value};
    this.props.updateRecipes(newValues);
  }

  render(){
    const {name, instructions} = this.props
  return (
    <div>
      <h3 className="recipeForm">Create a New Recipe</h3>

    <form onSubmit={this.handleOnSubmit}>
      <div>
        <p htmlFor="name">Name:</p>
        <input
          placeholder="enter recipe name"
          type="text"
          onChange={this.handleOnChange}
          name="name"
          value={name}
        />
      </div>

      <div>
        <p htmlFor="instructions">Instructions:</p>
        <textarea
          type="textarea"
          placeholder="enter instructions"
          onChange={this.handleOnChange}
          name="instructions"
          value={instructions}
        />
      </div>


        <button type="submit">Add Recipe</button>
    </form>
    </div>
  )
}
}

const mapStateToProps = ({ recipe }) => ({ recipe })

export default connect(mapStateToProps, {createRecipe, updateRecipes})(RecipeForm);






