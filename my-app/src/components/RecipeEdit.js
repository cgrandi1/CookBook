import React from 'react'
import {connect} from 'react-redux'
import {editRecipe} from '../actions/RecipeActions'

class RecipeEdit extends React.Component {

   state = {
     name: '',
     instructions: " "
   }

   handleOnChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value
     })
   }

   handleSubmit = (event) => {
     event.preventDefault()
    let recipe = {...this.state, id: this.props.recipe.id}
      this.props.editRecipe(recipe)
      this.setState({
        name: '',
        instructions: ''
      })
   }

  render() {
    return (
      <div className="editRecipe">
        <form onSubmit={this.handleSubmit}>
          <label>Edit Recipe:  </label>
          <div>
          <input 
          type='text' 
          placeholder='Edit Name' 
          value={this.state.name} name='editName' 
          onChange={this.handleOnChange}/>
          </div>
          <br/>
          <div>
          <textarea 
          type='text' 
          placeholder='Edit Instructions'
          value={this.state.instructions} 
          name='instructions' 
          onChange={this.handleChange}/>
          </div>
          <button type='submit'> Submit </button>
          </form>
          </div>

    )
  }
}
export default connect(null, {editRecipe})(RecipeEdit)