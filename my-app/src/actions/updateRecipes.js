import {RECIPE_INFO_UPDATE} from './updateRecipeInfoConstant.js'

export function updateRecipes(recipe) {
    return {
        type : RECIPE_INFO_UPDATE,
        recipe
    };
}