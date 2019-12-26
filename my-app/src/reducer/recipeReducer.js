const recipeReducer = (state = { recipe: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_RECIPE':
        return {
          ...state,
          recipe: [...state.recipe],
          loading: true
        }
      case 'ADD_RECIPE':
        return {
          ...state,
          recipe: action.recipe,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default recipeReducer;