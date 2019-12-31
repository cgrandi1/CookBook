import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/RecipeActions' 
import RecipeForm from '../components/RecipeForm';




export class RecipeInput extends Component {

  state = {
    recipes: {
      name: " ",
      instructions: []
    },
    saving: false,
    isOpen: false
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  handleOnSubmit = event => {
    event.preventDefault()
    const { addRecipe, history } = this.props
    addRecipe(this.state.recipe)
    this.setState({
      saving: !this.state.saving
    })
  }

  handleOnChange = event => {
    const name = event.target.name
    const recipe = this.state.recipe
    note[name] = event.target.value
    this.setState({
      recipe: recipe
    })
  }

  // handleOnChangeInstructions = event => {
  //   const instructions = event.target.instructions.split(" , ")
  //   const recipe = this.state.recipe
  //   note[instructions] = event.target.value
  //   this.setState({
  //     recipe: recipe
  //   })
  // }

  render(){
    return (
      <div>
        <h1>New Recipe</h1>
        <RecipeForm
          toggleModal={this.toggleModal}
          recipe={this.state.recipe}
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit} />
      </div>
    )
  }
}

export default connect(null, { addRecipe })(RecipeInput);





