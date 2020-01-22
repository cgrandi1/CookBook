import React, {Component} from 'react'
import RecipeEdit from './RecipeEdit'
import { connect } from 'react-redux'


class RecipeShow extends Component {


  render(){
  let recipe = this.props.recipes.filter(recipe => recipe.id == this.props.match.params.id)[0]

  return (
    <div className="show">
      <h2>{recipe ? recipe.name : null}</h2> <p>{recipe ? recipe.instructions : null}</p> <br/><p>{recipe ? recipe.ingredients : null}</p><br /><p>{recipe ? recipe.time : null}</p>
    </div>
  )

}
}

const mapStateToProps = state => {
    return {
      recipes: state.recipes
    }
  } 
export default connect(mapStateToProps)(RecipeShow)