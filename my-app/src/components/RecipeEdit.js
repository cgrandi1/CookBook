import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editRecipe, fetchRecipe } from '../actions/RecipeActions';
import RecipeForm from './RecipeForm';


class RecipeEdit extends Component {


  handleOnChange = (event) => {
    // console.log(event)
    const target = event.target;
    const value = target.value;
    const name = target.name
    this.setState({
      [name]: value
    })
  }


  handleSubmit = (event) => {
    // console.log(event)
    event.preventDefault()
    this.props.editRecipe(this.state)
    this.setState({
      name: this.props.name,
      instructions: this.props.instructions,
      ingredients: this.props.ingredients,
      time: this.props.time,

    })
  }

  renderForm = (recipe) => {
    return(
    <RecipeForm 
    onChange={this.handleOnChange}
    onSubmit={this.handleSubmit}
    recipe={recipe}
    />
    )
  }




  render() {
    let recipe = this.props.recipes.find(recipe => recipe.id == this.props.match.params.id)
    return (
      <div>
      {recipe ? this.renderForm(recipe) : null}
      </div>
   
    ) }
}




   export default connect(null, {editRecipe, fetchRecipe})(RecipeEdit)
        
        
        
