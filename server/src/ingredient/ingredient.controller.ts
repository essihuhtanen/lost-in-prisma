import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IngredientDTO } from 'src/dtos/ingredient.dto';
import { IngredientService } from './ingredient.service';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get()
  async getAllIngredients() {
    return await this.ingredientService.getAllIngredients();
  }

  @Get(':id')
  async getIngredientById(@Param('id') id: string) {
    const ingredient = await this.ingredientService.getIngredientById(id);
    if (!ingredient) {
      throw new NotFoundException(`Ingredient with ID ${id} not found`);
    }
    return ingredient;
  }

  @Post()
  async createIngredient(@Body() createIngredientDto: IngredientDTO) {
    return await this.ingredientService.createIngredient(createIngredientDto);
  }

  @Put(':id')
  async updateIngredient(
    @Param('id') id: string,
    @Body() ingredient: IngredientDTO,
  ) {
    const updatedIngredient = await this.ingredientService.updateIngredient(
      id,
      ingredient,
    );
    if (!updatedIngredient) {
      return await this.ingredientService.updateIngredient(id, ingredient);
    }
    return ingredient;
  }

  @Delete(':id')
  async deleteIngredient(@Param('id') id: string) {
    const deleteIngredient = await this.ingredientService.deleteIngredient(id);

    if (!deleteIngredient) {
      throw new NotFoundException(`Ingredient with ID ${id} not found`);
    }
    return deleteIngredient;
  }
}
