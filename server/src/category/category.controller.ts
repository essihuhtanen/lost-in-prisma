import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from '../dtos/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDTO) {
    console.log(createCategoryDto);
    return await this.categoryService.createCategory(createCategoryDto);
  }
}
