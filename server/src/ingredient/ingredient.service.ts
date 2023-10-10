import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IngredientDTO } from 'src/dtos/ingredient.dto';
import { Ingredient } from 'src/schemas/ingredient.schema';

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel(Ingredient.name) private ingredientModel: Model<Ingredient>,
  ) {}

  async createIngredient(ingredient: IngredientDTO): Promise<Ingredient> {
    const createdIngredient = new this.ingredientModel(ingredient);
    return createdIngredient.save();
  }

  async getAllIngredients(): Promise<Ingredient[]> {
    return this.ingredientModel.find().exec();
  }

  async getIngredientById(id: string): Promise<Ingredient> {
    return this.ingredientModel.findById(id).exec();
  }

  async updateIngredient(
    id: string,
    ingredient: IngredientDTO,
  ): Promise<Ingredient> {
    return this.ingredientModel.findByIdAndUpdate(id, ingredient).exec();
  }

  async deleteIngredient(id: string): Promise<Ingredient> {
    return this.ingredientModel.findByIdAndDelete(id).exec();
  }
}
