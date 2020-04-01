import {
  RECIPE_UPDATE,
  RECIPE_DELETE,
  RECIPE_CREATE,
  RECIPE_FETCHED,
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

export function recipeFetched(recipe){
  return{
    type: RECIPE_FETCHED,
    payload: {recipe}
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

export function fetchRecipe(recipeId){
  return (dispatch) => {
    return fetch(`http://localhost:3000/recipes/${recipeId}`)
      .then(response => response.json())
      .then(recipe => dispatch({type: 'RECIPE_FETCHED', payload: recipe})
    )
 };
}


export function deleteRecipe(recipeId) {
  console.log(recipeId)
  return dispatch => {
    return fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
      .then(recipe => {
        dispatch({ type: 'RECIPE_DELETE', payload: recipe})
        window.location.href='/recipes'}
    )
  }
}

export function editRecipe (recipe) {
  return dispatch => {
    return fetch(`http://localhost:3000/recipes/${recipe.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({ recipe })
    })
    .then(response => response.json())
      .then(recipe => {
        dispatch({ type: 'RECIPE_UPDATE', payload: recipe})
        }
    )
  }
}

export const createRecipe = (recipe) => {

  return (dispatch) => {
    fetch('http://localhost:3000/recipes', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body:JSON.stringify(recipe)
    })
    .then(response => response.json())
      .then(recipe => {
        console.log(7)
        debugger;
        dispatch({ type: 'RECIPE_CREATE', payload: recipe})
        window.location.href='/recipes'}
        // browserHistory.push('/recipes')}
    )

  }


}

//Category Actions

export const getCategories = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/categories"
      );
      const data = await response.json();
      dispatch({
        type: "GET_CLASSES",
        classes: data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addCategory = categoryData => {
  return async dispatch => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/categories",
        {
          method: "POST",
          body: JSON.stringify(categoryData),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await response.json();
      dispatch({
        type: "ADD_CATEGORY",
        studio_class: data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeCategory = id => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/category/${id}`,
        {
          method: "DELETE",
          body: JSON.stringify(id),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await response.json();
      dispatch({
        type: "REMOVE_CATEGORY",
        studio_class: data
      });
    } catch (err) {
      console.log(err);
    }
  };
};