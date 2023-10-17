export class RecipeDTO {
  name: string;
  ingredients: {
    ingredient: string; // TODO - do I want this to be IngredientDTO?
    amount: number;
    unit: string;
  }[];
  instructions: string;
}
