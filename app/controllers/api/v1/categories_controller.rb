class Api::V1::CategoriesController < ApplicationController

    def index
        @categories = Category.all
        render json: Category.all
      end
    
      def show
        @category = Category.find(params[:id])
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
        @recipe.destroy
        render json: @recipe
      end
    
      private
      
      
        def category_params
          params.require(:category).permit(:name, :recipe_id)
        end 
    
    
    end
end
