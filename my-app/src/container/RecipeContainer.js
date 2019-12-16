import React, { Component } from 'react'

class RecipeContainer extends Component{

    render() {
        return(
            <div>
                <div className="inputContainer">
                    <input className="taskRecipe" type="text"
                        placeholder="add instructions" maxLength="200" />
                </div>
                <div className="recipeWrapper">
                    <ul className="recipeList">

                    </ul>

                </div>
            </div>

        )
    }
}