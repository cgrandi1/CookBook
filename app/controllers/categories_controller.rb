class CategoreisController < ApplicationController

    # def index
    #     @categories = Category.all
    #     render json: Category.all
    #   end
    
      def show
        @category = Category.find(params[:id])
        recipe = @category.recipe.all
        render json: @category
      end
    
      def create
        @category = Category.new(category_params)
        if @category.save
            render json: @category
        else 
            render json: {error: 'Error creating Category'}
        end 
    
      end
    
      def destroy
        @category = category.find(params[:id])
        recipes = @category.recipe.all
        recipes.destroy
        render json: @recipe
      end
    
      private
      
      
        def category_params
          params.require(:category).permit(:name, :recipe_id)
        end 
    
    
    end
end
