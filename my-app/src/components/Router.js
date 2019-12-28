import  React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RecipePage from '../pages/RecipePage'


const Router =  () => {
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/recipes' component={RecipePage} />
    </Switch>
}

export default Router;