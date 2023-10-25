import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DbService } from 'src/db/db.service';
import { RecipeDTO } from 'src/dtos/recipe.dto';
import { Recipe } from 'src/schemas/recipe.schema';

@Injectable()
export class RecipeService {
  private entityName = 'recipe';

  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<Recipe>,
    private dbService: DbService,
  ) {}

  async createRecipe(recipe: RecipeDTO): Promise<Recipe> {
    return await this.dbService.create(this.recipeModel, recipe);
  }

  async getAllRecipes(): Promise<Recipe[]> {
    return await this.dbService.getAll(this.entityName, this.recipeModel);
  }

  async getRecipeById(id: string): Promise<Recipe> {
    return await this.dbService.getById(this.entityName, this.recipeModel, id);
  }

  async updateRecipe(id: string, recipe: RecipeDTO): Promise<Recipe> {
    return await this.dbService.update(this.recipeModel, id, recipe);
  }

  async deleteRecipe(id: string): Promise<Recipe> {
    return await this.dbService.delete(this.recipeModel, id);
  }
}
