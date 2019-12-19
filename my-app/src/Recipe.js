import React, { Component } from 'react';


export default class Recipe extends Component{
    render(){
        return (
            <div className="inputName">
                <input 
                className="recipeName" 
                type="text"
                placeholder="Recipe"
                onChange={event => this.props.handleRecipeName(event)}
                value={this.props.recipeData.name} />
                <h1>Add Name of Recipe</h1>
            </div>
            <div clasName="inputInstructions">
                <input className="instructions" type="text"
                placeholder="instructions" />
                <p>Add Instructions</p>
        </div>
        )
    }
}

export default Recipe;