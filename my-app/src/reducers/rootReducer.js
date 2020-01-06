import recipeReducer from './recipeReducer'
import reSetRecipe from './reSetRecipe'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({recipes: recipeReducer, reSetRecipe})

export default rootReducer;