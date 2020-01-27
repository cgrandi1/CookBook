import React from 'react'
import RecipeEdit from './RecipeForm'
import { Link } from 'react-router-dom';


const RecipeShow = (props) => {
    console.log(props)

    let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]
    return (
    <div className="show">
      <h2>{recipe ? recipe.name : null}</h2> <p>{recipe ? recipe.instructions : null}</p> <br/><p>{recipe ? recipe.ingredients : null}</p><br /><p>{recipe ? recipe.time : null}</p>
      <Link to={`/recipes/${recipe.id}/edit`} >Edit Recipe </Link>
    </div>
  )

}


// const mapStateToProps = state => {
//     return {
//       recipes: state.recipes
//     }
//   } 
export default (RecipeShow)