
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
  return dispatch => {
    return fetch(`http://localhost:3000/recipes/${recipe.id}`, {
      method: "DELETE",
      body: JSON.stringify(recipe.id),
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
      .then(recipe => {
        dispatch({ type: 'REMOVE_RECIPE', payload: recipe})}
    )
  }
}
  
  // export function updateNote(note){
  //   return (dispatch) => {
  //     dispatch({type: 'LOADING_NOTES'});
  //     return fetch(`http://localhost:3009/api/notes/${recipe.id}`, {
  //       method: 'PUT',
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ recipe: recipe })
  //       })
  //       .then(response => response.json())
  //       .then(note => dispatch({ type: 'LOAD_RECIPESS', payload: note })
  //     )
  //   }
  // }
  // export function sav(recipe){
  //   return (dispatch) => {
  //     dispatch({type: 'SAVING_RECIPE'});
  //     return fetch('http://localhost:3001/recipes', {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ recipe: recipe })
  //       })
  //       .then(response => response.json())
  //       .then(recipe => {
  //         dispatch({ type: 'SAVE_RECIPE', payload: recipe})}
  //     )
  //   }
  