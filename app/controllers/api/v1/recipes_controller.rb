class Api::V1::RecipesController < ApplicationController


  def index
    recipes = Recipe.order("created_at DESC")
    render json: recipes
  end

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end

  def create
    # @category = Category.find_by(id: params[:ingredients][:recipe][:category_id])
    @recipe = Recipe.create(recipe_params)
    render json: @recipe

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
  
  
    def recipe_params
      params.require(:recipe).permit(:name, :instructions, :ingredients, :time)
    end 


end
