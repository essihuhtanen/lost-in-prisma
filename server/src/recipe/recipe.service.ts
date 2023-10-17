import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RecipeDTO } from 'src/dtos/recipe.dto';
import { Recipe } from 'src/schemas/recipe.schema';

@Injectable()
export class RecipeService {
  constructor(@InjectModel(Recipe.name) private recipeModel: Model<Recipe>) {}

  async createRecipe(recipe: RecipeDTO): Promise<Recipe> {
    const createdRecipe = new this.recipeModel(recipe);
    return createdRecipe.save();
  }

  async getAllRecipes(): Promise<Recipe[]> {
    return this.recipeModel
      .find()
      .populate({
        path: 'ingredients.ingredient',
        populate: {
          path: 'category',
        },
      })
      .exec();
  }

  async getRecipeById(id: string): Promise<Recipe> {
    return this.recipeModel.findById(id).exec();
  }

  async updateRecipe(id: string, recipe: RecipeDTO): Promise<Recipe> {
    return this.recipeModel.findByIdAndUpdate(id, recipe).exec();
  }

  async deleteRecipe(id: string): Promise<Recipe> {
    return this.recipeModel.findByIdAndDelete(id).exec();
  }
}
