import {
  RECIPE_UPDATE,
  RECIPE_DELETE,
  RECIPE_CREATE,
} from "./recipeConstants";

export function updateRecipe(recipeID, newItemAttributes) {
  return {
      type : RECIPE_UPDATE,
      payload : {
          recipeID,
          newItemAttributes,
      },
  };
}

export function removeRecipe(recipeID) {
  return {
      type : RECIPE_DELETE,
      payload : {recipeID}
  };
}

export function addRecipe(newItemAttributes) {
  return {
      type : RECIPE_CREATE,
      payload : {
          newItemAttributes
      },
  };
}


export function getRecipes(){
  return (dispatch) => {
    return fetch('http://localhost:3000/recipes')
      .then(response => response.json())
      .then(recipes => dispatch({ type: 'LOAD_RECIPES', payload: recipes })
    )
 };
}

// export function fetchRecipe(recipeId){
// 	return dispatch => {
// 		return fetch(`http://localhost:3000/recipes/${recipeId}`)
//     .then(response => response.json())
//     .then(recipe => dispatch({ type: 'LOAD_RECIPE', payload: recipe })
//     )
//   }
// }


export const deleteRecipe = (recipeId, routerHistory) => {
  return dispatch => {
    return fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: "DELETE"
    })
    .then(response => {
      dispatch(removeRecipe(recipeId));
      routerHistory.replace('/recipes');
    })
    .catch(error => console.log(error))
  }
}

export const createRecipe = (recipe, routerHistory) => {
  return dispatch => {
    return fetch('http://localhost:3000/recipes', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({recipe: recipe})
    })
    .then(response => response.json())
    .then(recipe => {
      dispatch(addRecipe(recipe));
      routerHistory.replace(`/recipes/${recipe.id}`)
    })
  }
}
  
export const editRecipe = (recipeId, routerHistory) => {
  return dispatch => {
    return fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: "PUT"
    })
    .then(response => {
      dispatch(updateRecipe(recipeId));
      routerHistory.replace('/recipes');
    })
    .catch(error => console.log(error))
  }
}