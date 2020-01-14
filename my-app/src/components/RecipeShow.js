import React from 'react'
import RecipeEdit from './RecipeEdit'
import {Link} from 'react-router-dom'

const RecipeShow = (props) => {

  
  let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

  return (
    <div className="show">
      <h2>{recipe ? recipe.name : null}</h2> <p>{recipe ? recipe.instructions : null}</p> <br/><p>{recipe ? recipe.ingredients : null}</p><br /><p>{recipe ? recipe.time : null}</p>
      <RecipeEdit recipe={recipe}/>
    </div>
  )

}
export default RecipeShow