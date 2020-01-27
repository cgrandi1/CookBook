import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editRecipe, fetchRecipe } from '../actions/RecipeActions';
import RecipeForm from './RecipeForm';

class RecipeEdit extends Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      id: window.location.href.split("recipe/")[1],
      name: this.props.recipe.name,
      instructions: this.props.recipe.instructions,
      ingredients: this.props.recipe.ingredients,
      time: this.props.recipe.time,
    }
  }


  // componentWillMount() {
  //     this.props.fetchRecipe(this.state.id)
  // }

  // componentWillReceiveProps(newProps){
  //     if (this.props.recipe !== newProps.recipe) {
  //         this.setState({changed: true});
  //       }
  //     }
  // shouldComponentUpdate(newProps, newState){
  //     console.log("New Props:", newProps);
  //     console.log("New Props:", newState);
  //     return true

  // }


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
    //   let recipe = {...this.state, id: this.props.recipe.id}
    this.props.editRecipe(this.state)
    this.setState({
      name: this.props.name,
      instructions: this.props.instructions,
      ingredients: this.props.ingredients,
      time: this.props.time,
      isClicked: !this.state.isClicked

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
              value={this.state.name}
              name='name'
              onChange={this.handleOnChange} />
          </div>
          <br />
          <div>
            <textarea
              type='text'
              placeholder='Edit Instructions'
              value={this.state.instructions}
              name='instructions'
              onChange={this.handleOnChange} />
          </div>
          <br />
          <div>
            <input
              type='text'
              placeholder='Edit Ingredients'
              value={this.state.ingredients}
              name='ingredients'
              onChange={this.handleOnChange} />
          </div>
          <br />
          <div>
            <input
              type='text'
              placeholder='Edit Time'
              value={this.state.time}
              name='time'
              onChange={this.handleOnChange} />
          </div>

          <button type='submit'> Submit </button>

        </form>
        </div>

        )
        }}

        const mapStateToProps = (state, ownProps) => {

          const recipe = state.recipes.find(recipe => recipe.id == ownProps.match.params.noteId)
        
          if (recipe) {
            return { recipe: recipe }
          } else {
            return { recipe: {} }
          }
        };


   export default connect(mapStateToProps, {editRecipe, fetchRecipe})(RecipeEdit)
        
        
        
