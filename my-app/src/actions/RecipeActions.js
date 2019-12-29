export function getRecipes(){
    return (dispatch) => {
      dispatch({ type: 'LOADING_NOTES' });
      return fetch('http://localhost:3001/recipes')
        .then(response => response.json())
        .then(recipes => dispatch({ type: 'LOAD_ALL_RECIPES', payload: recipes })
      )
    };
  }