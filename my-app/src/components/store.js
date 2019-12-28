import { createStore, combineReducers } from 'redux'
import recipeReducer from '../reducer/recipeReducer'

const rootReducer = combineReducers({
    desert: recipeReducer 

})

const store = createStore(
    rootReducer.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export default store;