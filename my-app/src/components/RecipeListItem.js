import React from 'react';

export default function RecipeListItem(props){
    return <div className="recipe-list-item">
        <h3>{props.recipe.name}</h3>
        <p>{props.recipe.name}</p>
        <p>{props.recipe.ingredients}</p>
    </div>
}