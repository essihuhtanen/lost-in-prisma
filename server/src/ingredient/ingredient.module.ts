import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ingredient, IngredientSchema } from 'src/schemas/ingredient.schema';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ingredient.name, schema: IngredientSchema },
    ]),
  ],
  controllers: [IngredientController],
  providers: [IngredientService],
})
export class IngredientModule {}
