import recipeReducer from './recipeReducer'
import reSetRecipe from './reSetRecipe'
// import editRecipe from './editRecipe'
import {combineReducers} from 'redux'
// import { editRecipe } from '../actions/RecipeActions'


const rootReducer = combineReducers({recipes: recipeReducer, recipeInfo: reSetRecipe})

export default rootReducer;