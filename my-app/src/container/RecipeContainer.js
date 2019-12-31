import React, { Component } from 'react'
import RecipeInput from '../components/RecipeInput'
import RecipePage from '../components/RecipePage'
import { connect } from 'react-redux'

class RecipeContainer extends Component {

  render() {
    return (
      <div>
        <RecipeInput addRecipe={ this.props.addRecipe }/>
        <RecipePage recipes={ this.props.recipes } />
      </div>
    )
  }
}

const mapStateToProps = ({ recipe }) => ({ recipe })

const mapDispatchToProps = dispatch => ({
  addRecipe: recipe => dispatch({ type: 'ADD_RESTAURANT', recipe }),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer)