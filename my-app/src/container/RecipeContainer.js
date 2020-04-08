import React, {Component} from 'react'
import RecipeForm from '../components/RecipeForm'
import {connect} from 'react-redux'
import {createRecipe} from '../actions/RecipeActions'

class RecipeContainer extends Component {

   state = {
     name: '',
     instructions: '',
     ingredients: '',
     time: ''
   }


   

   handleChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value
     })
     
   }

   handleSubmit = (event) => {
     console.log(1)
      //console.log(event)
     event.preventDefault()
      this.props.createRecipe(this.state)
      console.log(2)

      this.setState({
        name: '',
        instructions: '',
        ingredients: '',
        time: ''
      })

   }

  render() {
    console.log(3)

    return (
      <div>
        <h2>Add New Recipe</h2>
        <RecipeForm recipe={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} submit />
      </div>
    )
  }

}

export default connect(null, {createRecipe})(RecipeContainer)
