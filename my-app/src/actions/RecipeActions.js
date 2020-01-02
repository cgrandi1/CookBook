
export function getRecipes(){
  return (dispatch) => {
    return fetch('http://localhost:3000/recipes')
      .then(response => response.json())
      .then(recipes => dispatch({ type: 'LOAD_RECIPES', payload: recipes })
    )
 };
}

export function fetchRecipe(recipeId){
	return dispatch => {
		return fetch(`http://localhost:3000/recipes/${recipeId}`)
    .then(response => response.json())
    .then(recipe => dispatch({ type: 'LOAD_RECIPE', payload: recipe })
    )
  }
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

export function deleteRecipe(recipe) {
  console.log(recipe)
  return dispatch => {
    return fetch(`http://localhost:3000/recipes/${recipe.id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
      .then(recipe => {
        dispatch({ type: 'REMOVE_RECIPE', payload: recipe})}
    )
  }
}

export function addRecipe(recipe, router){
  console.log(recipe)
  return (dispatch) => {
    return fetch('http://localhost:3000/recipes', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ recipe: recipe })
      })
      .then(response => response.json())
      .then(recipe => {
        dispatch({ type: 'ADD_RECIPE', payload: recipe})
        router.replace(`/recipes/${recipe.id}`)}
      )}
  }
  
  
  export function updateRecipe(recipe){
    return (dispatch) => {
      dispatch({type: 'LOADING_NOTES'});
      return fetch(`http://localhost:3009/api/notes/${recipe.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ recipe: recipe })
        })
        .then(response => response.json())
        .then(note => dispatch({ type: 'LOAD_RECIPESS', payload: note })
      )
    }
  }
