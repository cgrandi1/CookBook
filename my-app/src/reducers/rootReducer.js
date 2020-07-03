import recipeReducer from './recipeReducer'
import {combineReducers} from 'redux'
import { useReducer } from 'react';


const rootReducer = combineReducers({recipes: recipeReducer}, {users: useRreducer}, {categories: categoryReducer})

export default rootReducer;