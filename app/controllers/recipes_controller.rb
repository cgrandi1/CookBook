class RecipesController < ApplicationController
  
  def index
    recipes = Recipe.order("created_at DESC")
    render json: recipes
  end

  def create
    binding.pry
    # @category = Category.find_by(id: params[:ingredients][:recipe][:category_id])
    @recipe = Recipe.create(recipe_params)
    render json: recipe

  end

  def update
    @recipe = Receipe.find(params[:id])
    @reicpe.update_attributes(recipe_params)
  end

  def destroy
    binding.pry
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
  end

  private
  
  
    def recipe_params
      params.require(:recipe).permit(:name, :instructions, :id)
    end 


end
