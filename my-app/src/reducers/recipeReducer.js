export default function recipeReducer(state=[], action) {

  switch (action.type) {
    case 'LOAD_RECIPES':
      return [...action.recipes]

    case 'LOAD_RECIPE':
      return Object.assign({}, state, { loading: false, recipe: action.payload })

    case 'REMOVE_RECIPE':
      const firstMatchIndex = state.indexOf(action.recipes)
      return state.filter((item, index) => index !== firstMatchIndex)

    // case 'EDIT_RECIPE':
    //   return {
    //     ...state, recipes: state.recipes.map(
    //       recipe => {
    //         if (recipe.id === action.recipe.id) {
    //           recipe.name = action.recipe.name,
    //           recipe.instructions = action.recipe.instructions
    //           return recipe
    //         } else {
    //           return recipe
    //         }
    //       })
    //   }

    case 'ADD_RECIPES':
      return [...action.recipes]


    default:
      return state;
  }
}

