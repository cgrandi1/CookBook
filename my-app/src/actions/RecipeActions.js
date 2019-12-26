export const fetchRecipe = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_Recipe'})
    fetch('http://localhost:3000/recipes').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_Recipe', cats: responseJSON })
    })
  }
}