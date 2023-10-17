import {
  Body,
  Controller,
  Delete,
  Get,
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
    return await this.categoryService.getCategoryById(id);
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CategoryDTO) {
    console.log(createCategoryDto);
    return await this.categoryService.createCategory(createCategoryDto);
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() category: CategoryDTO) {
    return await this.categoryService.updateCategory(id, category);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    return await this.categoryService.deleteCategory(id);
  }
}
