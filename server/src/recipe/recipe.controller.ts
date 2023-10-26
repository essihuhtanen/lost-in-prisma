import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  NotFoundException,
} from '@nestjs/common';
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
    const recipe = await this.recipeService.getRecipeById(id);
    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
    return recipe;
  }

  @Post()
  async createRecipe(@Body() recipe: RecipeDTO) {
    return await this.recipeService.createRecipe(recipe);
  }

  @Put(':id')
  async updateRecipe(id: string, recipe: RecipeDTO) {
    const updatedRecipe = await this.recipeService.updateRecipe(id, recipe);
    if (!updatedRecipe) {
      return await this.recipeService.updateRecipe(id, recipe);
    }
    return recipe;
  }

  @Delete(':id')
  async deleteRecipe(id: string) {
    const deletedRecipe = await this.recipeService.deleteRecipe(id);
    if (!deletedRecipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
    return deletedRecipe;
  }
}
