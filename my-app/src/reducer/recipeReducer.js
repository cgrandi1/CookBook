const recipeReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_RECIPE':
      return[...state, action.payload]

    case 'REMOVE_RECIPE':
      const firstMatchIndex = state.indexOf(action.payload)
      return state.filter((item, index) => index !== firstMatchIndex)

      default:
        return state;
  }
}

export default recipeReducer;