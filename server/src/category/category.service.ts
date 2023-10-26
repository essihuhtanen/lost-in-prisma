import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../schemas/category.schema';
import { CategoryDTO } from '../dtos/category.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class CategoryService {
  private readonly entityName = 'category';

  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
    private dbService: DbService,
  ) {}

  async createCategory(createCategoryDto: CategoryDTO): Promise<Category> {
    return await this.dbService.create(this.categoryModel, createCategoryDto);
  }

  async getAllCategories(): Promise<Category[]> {
    return await this.dbService.getAll(this.entityName, this.categoryModel);
  }

  async getCategoryById(id: string): Promise<Category | null> {
    try {
      return await this.dbService.getById(
        this.entityName,
        this.categoryModel,
        id,
      );
    } catch (error) {
      return null;
    }
  }

  async updateCategory(
    id: string,
    category: CategoryDTO,
  ): Promise<Category | null> {
    try {
      return await this.dbService.update(this.categoryModel, id, category);
    } catch (error) {
      return null;
    }
  }

  async deleteCategory(id: string): Promise<Category | null> {
    try {
      return await this.dbService.delete(this.categoryModel, id);
    } catch (error) {
      return null;
    }
  }
}
