class RecipesController < ApplicationController

  after_action :set_category 


  def index
    recipes = Recipe.order("created_at DESC")
    render json: recipes
  end

  def show
    @recipe = Recipe.find(params[:id])  
    render json: @recipe

  def create
    @recipe = @category.recipe.new(recipe_params)

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
  
  def set_category
    @category = Category.find(params[:category_id])
  end 

    def recipe_params
      params.require(:recipe).permit(:name, :instructions, :ingredients, :time)
    end 


end
