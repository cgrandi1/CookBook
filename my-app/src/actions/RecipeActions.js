export const addRecipe = (recipe) => ({
    type: 'ADD_RECIPE',
    id: recipe.id,
    payload: recipe
  });

  export const updateRecipe = (recipe) => ({
    type: 'UPDATE_RECIPE',
    id:recipe.id,
    payload: recipe,
});

export const deleteRecipe = id => ({
    type: 'DELETE_RECIPE',
    id:id,
});