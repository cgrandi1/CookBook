export function getRecipes(){
    return (dispatch) => {
      dispatch({ type: 'LOADING_RECIPES' });
      return fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(response => console.log(response))
        // .then(recipes => dispatch({ type: 'RECIPES', payload: recipes })
    };
  }

  export function sav(recipe){
    return (dispatch) => {
      dispatch({type: 'SAVING_RECIPE'});
      return fetch('http://localhost:3001/recipes', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ recipe: recipe })
        })
        .then(response => response.json())
        .then(recipe => {
          dispatch({ type: 'SAVE_RECIPE', payload: recipe})}
      )
    }
  }