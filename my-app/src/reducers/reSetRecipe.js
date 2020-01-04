const initialState = {
  name: '',
  instructions: ''

}

function reSetRecipe(state= initialState, action) {
    switch(action.type){
        case 'RECIPE_INFO_UPDATE':
        return {...state, recipe: action.payload };
    default:
        return initialState;
    }
}

export default reSetRecipe;
