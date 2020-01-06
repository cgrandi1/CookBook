import {
  RECIPE_UPDATE,
  RECIPE_DELETE,
  RECIPE_CREATE,
  RECIPE_FETCHED,
  LOAD_RECIPES
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

export function removeRecipe(recipe) {
  return {
      type : RECIPE_DELETE,
      recipe
  };
}

export function recipeFetched(recipeID){
  return{
    type: RECIPE_FETCHED,
    payload: {recipeID}
  }
}

export function addRecipe(newItemAttributes) {
  return {
      type : RECIPE_CREATE,
      payload : {
          newItemAttributes,
      },
  };
}

export function getRecipes(){
  return (dispatch) => {
    return fetch('http://localhost:3000/recipes')
      .then(response => response.json())
      .then(recipes => dispatch({type: 'LOAD_RECIPES', payload: recipes})
    )
 };
}

export function fetchRecipe(recipeID){
  return (dispatch) => {
    return fetch(`http://localhost:3000/recipes/${recipeID}`)
      .then(response => response.json())
      .then(recipeID => dispatch({type: 'RECIPE_FETCHED', payload: recipeID})
    )
 };
}

// export const getRecipes = () => {
//   return (dispatch) => {
//     dispatch({ type: 'LOAD_RECIPE'})
//     fetch('http://localhost:3000/recipes').then(response => {
//       return response.json()
//     }).then(data => {
//       dispatch({ type: 'ADD_RECIPES', recipes: data })
//     })
//   }
// }

export function deleteRecipe(recipeId) {
  console.log(recipeId)
  return dispatch => {
    return fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
      .then(recipe => {
        dispatch({ type: 'RECIPE_DELETE', payload: recipe})}
    )
  }
}

export function editRecipe (recipeId) {
  return dispatch => {
    return fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ recipeId: recipeId })
    })
    .then(recipeId => {
      dispatch({type: RECIPE_UPDATE, payload: recipeId});
    })
    .catch(error => console.log(error))
  }
}

export const createRecipe = recipeData => {
  return async dispatch => {
    try {
      const response = await fetch(
        "http://localhost:3000/recipes",
        {
          method: "POST",
          body: JSON.stringify(recipeData),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await response.json();
      dispatch({
        type: "RECIPE_CREATE",
        recipe: data
      });
    } catch (err) {
      console.log(err);
    }
  };
};
  

