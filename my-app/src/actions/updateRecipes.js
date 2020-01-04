import {RECIPE_INFO_UPDATE} from './updateRecipeInfoConstant'

export function updateRecipes(recipeData) {
    return {
        type : RECIPE_INFO_UPDATE,
        recipeData
    };
}