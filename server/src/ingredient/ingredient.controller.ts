import {
  Body,
  Controller,
  Delete,
  Get,
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
    return await this.ingredientService.getIngredientById(id);
  }

  @Post()
  async createIngredient(@Body() createIngredientDto: IngredientDTO) {
    console.log(createIngredientDto);
    return await this.ingredientService.createIngredient(createIngredientDto);
  }

  @Put(':id')
  async updateIngredient(
    @Param('id') id: string,
    @Body() ingredient: IngredientDTO,
  ) {
    return await this.ingredientService.updateIngredient(id, ingredient);
  }

  @Delete(':id')
  async deleteIngredient(@Param('id') id: string) {
    return await this.ingredientService.deleteIngredient(id);
  }
}
