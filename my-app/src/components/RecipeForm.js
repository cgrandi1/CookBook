import React, { Component } from 'react';
import { createRecipe } from '../actions/RecipeActions'
import { connect } from 'react-redux';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal'
// import FormGroup from 'react-bootstrap/FormGroup'
// import FormControl from 'react-bootstrap/FormControl'


class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: {
        name: " ",
        instructions: []
      },
      saving: false,
      // isOpen: false
    }
  }

  // toggleModal = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   })
  // };

  handleOnSubmit = event => {
    event.preventDefault()
    createRecipe(this.state.recipe)
    this.setState({
      saving: !this.state.saving
    })
  }

  handleOnChange = event => {
    const name = event.target.name
    const recipe = this.state.recipe
    recipe[name] = event.target.value
    this.setState({
      recipe: recipe
    })
  }



render(){
  return (
    <div>
      <h3 className="recipeForm">Create a New Recipe</h3>

    <form onSubmit={this.handleOnSubmit}>
      <div>
        <p htmlFor="name">Name:</p>
        <input
          type="text"
          onChange={this.handleOnChange}
          name="name"
          value={this.state.name}
        />
      </div>

      <div>
        <p htmlFor="instructions">Instructions:</p>
        <textarea
          type="textarea"
          onChange={this.handleOnChange}
          name="ingredients"
          value={this.state.instructions}
        />
      </div>


        <button type="submit">Add Recipe</button>
    </form>
    </div>
  )
}
}
// const mapStateToProps = ({ recipe }) => ({ recipe })

export default connect(null, {createRecipe})(RecipeForm);






