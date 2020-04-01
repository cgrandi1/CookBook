class Api::V1::RecipesController < ApplicationController


  def index
    @recipes = @category.recipes
    render json: @recipes
  end

  def show
    @recipes = Recipe.find(params[:id])
  end

  def create
    @recipe = @category.recipes.new(recipe_params)

  end

  def update
    @recipe = Recipe.find(params[:id])
    @recipe.update_attributes(recipe_params)
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    render json: @recipe
  end

  private
  
  def set_category
    @category = Category.find(params[:category_id])
  end 
    def recipe_params
      params.require(:recipe).permit(:name, :instructions, :ingredients, :time)
    end 


end
