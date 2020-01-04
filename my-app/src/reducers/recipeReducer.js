export default function recipeReducer(state = [], action) {

  switch (action.type) {
    case 'LOAD_RECIPES':
      return action.payload;


    // case 'LOAD_RECIPE':
    //   return Object.assign({}, state, { loading: false, recipe: action.payload })

    case 'RECIPE_DELETE':
        return { ...state, recipes: state.recipes.filter(recipe => recipe.id !== action.id) }

    case 'RECIPE_UPDATE':
        return {...state, recipe: action.payload }


    case 'RECIPE_CREATE':
      return state.concat(action.payload);


    default:
      return state;
  }
}
