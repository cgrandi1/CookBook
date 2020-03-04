import recipeReducer from './recipeReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({recipes: recipeReducer, category: categoryReducer})

export default rootReducer;