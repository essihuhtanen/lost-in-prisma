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
import { CategoryService } from './category.service';
import { CategoryDTO } from '../dtos/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    const category = await this.categoryService.getCategoryById(id);
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CategoryDTO) {
    const category =
      await this.categoryService.createCategory(createCategoryDto);
    return category;
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() category: CategoryDTO) {
    const updatedCategory = await this.categoryService.updateCategory(
      id,
      category,
    );
    if (!updatedCategory) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return updatedCategory;
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    const deleted = await this.categoryService.deleteCategory(id);
    if (!deleted) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return deleted;
  }
}
