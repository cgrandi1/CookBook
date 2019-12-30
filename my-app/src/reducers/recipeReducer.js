const recipeReducer = (state=[], action) => {
  switch(action.type){
    case 'LOAD_RECIPE':
      return[...action.recipes]

    case 'REMOVE_RECIPE':
      const firstMatchIndex = state.indexOf(action.recipes)
      return state.filter((item, index) => index !== firstMatchIndex)

      default:
        return state;
  }
}

export default recipeReducer;