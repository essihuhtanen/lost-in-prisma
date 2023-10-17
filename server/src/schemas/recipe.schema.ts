import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, HydratedDocument } from 'mongoose';
import { Ingredient } from './ingredient.schema';

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema()
export class Recipe {
  @Prop()
  name: string;
  @Prop()
  instructions: string;
  @Prop([
    {
      ingredient: { type: MongooseSchema.Types.ObjectId, ref: 'Ingredient' },
      amount: Number,
      unit: String,
    },
  ])
  ingredients: { ingredient: Ingredient; amount: number; unit: string }[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
