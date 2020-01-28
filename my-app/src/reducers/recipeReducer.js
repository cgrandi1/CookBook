export default function recipeReducer( state=[], action) {
  console.log(10)

  switch (action.type) {
    case 'LOAD_RECIPES':
      return action.payload

    case 'RECIPE_FETCHED':
      return [...state, action.payload]

    case 'RECIPE_DELETE':
        return state.filter((recipe)=>recipe.id !== action.id);



    case 'RECIPE_UPDATE':
    let recipeUpdate = state.recipes.map(recipe => {
      if (recipe.id === action.payload.id) {
        return action.payload
      } else {
        return recipe
      }
    })
    return {...state, recipes: recipeUpdate}

    case 'RECIPE_CREATE':
      return [...state, action.payload];


    default:
      return state;
  }
}




// handleOnChange = (result) => {
//   const {name, value} = result;

//   const newValues = { [name] : value};
//   this.props.updateRecipes(newValues);
// }

// handleOnSubmit = e => {
//   e.preventDefault();
//   const { createRecipe, recipeFormData, history} = this.props;
//   createRecipe(recipeFormData, history);
// }

// render() {
//   const { name, ingredients, directions, cook_time } = this.props.recipeFormData;