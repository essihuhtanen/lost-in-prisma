import { IngredientDTO } from './ingredient.dto';

export class RecipeDTO {
  name: string;
  ingredients: {
    ingredient: IngredientDTO;
    amount: number;
    unit: string;
  }[];
  instructions: string;
}
