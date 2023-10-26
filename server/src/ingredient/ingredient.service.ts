import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DbService } from 'src/db/db.service';
import { IngredientDTO } from 'src/dtos/ingredient.dto';
import { Ingredient } from 'src/schemas/ingredient.schema';

@Injectable()
export class IngredientService {
  private readonly entityName = 'ingredient';

  constructor(
    @InjectModel(Ingredient.name) private ingredientModel: Model<Ingredient>,
    private dbService: DbService,
  ) {}

  async createIngredient(ingredient: IngredientDTO): Promise<Ingredient> {
    return await this.dbService.create(this.ingredientModel, ingredient);
  }

  async getAllIngredients(): Promise<Ingredient[]> {
    return await this.dbService.getAll('ingredient', this.ingredientModel);
  }

  async getIngredientById(id: string): Promise<Ingredient | null> {
    try {
      return await this.dbService.getById(
        this.entityName,
        this.ingredientModel,
        id,
      );
    } catch (error) {
      return null;
    }
  }

  async updateIngredient(
    id: string,
    ingredient: IngredientDTO,
  ): Promise<Ingredient> {
    try {
      return await this.dbService.update(this.ingredientModel, id, ingredient);
    } catch (error) {
      return null;
    }
  }

  async deleteIngredient(id: string): Promise<Ingredient> {
    try {
      return await this.dbService.delete(this.ingredientModel, id);
    } catch (error) {
      return null;
    }
  }
}
