import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeDTO } from 'src/dtos/recipe.dto';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async getAllRecipes() {
    return await this.recipeService.getAllRecipes();
  }

  @Get(':id')
  async getRecipeById(id: string) {
    return await this.recipeService.getRecipeById(id);
  }

  @Post()
  async createRecipe(recipe: RecipeDTO) {
    return await this.recipeService.createRecipe(recipe);
  }

  @Put(':id')
  async updateRecipe(id: string, recipe: RecipeDTO) {
    return await this.recipeService.updateRecipe(id, recipe);
  }

  @Delete(':id')
  async deleteRecipe(id: string) {
    return await this.recipeService.deleteRecipe(id);
  }
}
