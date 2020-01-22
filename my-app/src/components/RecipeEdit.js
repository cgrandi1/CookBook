import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { editRecipe, fetchRecipe } from '../actions/RecipeActions'
import RecipeForm from './RecipeForm'

class RecipeEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            recipe: this.props.recipe
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


    handleOnSubmit = event => {
        event.preventDefault()
        const { editRecipe } = this.props
        editRecipe(this.state.recipe)
        this.setState({
          isEditing: !this.state.isEditing
        })
      }



      render(){
        if (this.state.isEditing) {
          return (
            <div>
              <h1>Edit Recipe</h1>
              <RecipeForm
                recipe={this.state.recipe}
                button={this.state.isEditing}
                onChange={this.handleOnChange}
                onSubmit={this.handleOnSubmit} />
            </div>
          )
        }
        return(
          <div className="col-md-6 right-align jumbotron">
            <h2>{this.props.recipe.title}</h2>
            <p>{this.props.recipe.content}</p>
            <button onClick={this.handleOnClick}>Edit</button>
          </div>
        )
      }
    }

const mapStateToProps = (state, ownProps) => {

    const recipe = state.recipes.find(recipe => recipe.id == ownProps.match.params.recipeId)

    if (recipe) {
        return { recipe: recipe }
    } else {
        return { recipe: {} }
    }
};


export default connect(mapStateToProps, { editRecipe, fetchRecipe })(RecipeEdit)



