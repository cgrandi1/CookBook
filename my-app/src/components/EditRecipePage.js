import React from 'react'
import RecipeEdit from './RecipeEdit'
import {Redirect} from 'react-router-dom'

const EditRecipePage = (props) => {

  let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

  return (
    <div className="RecipeEdit">
      <h2>{recipe ? recipe.name : null}</h2> 
      <p>{recipe ? recipe.instructions : null}</p> 
      <br/>
      <RecipeEdit recipe={recipe}/>
    </div>
  )

}
export default EditRecipePage