import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ingredient, IngredientSchema } from 'src/schemas/ingredient.schema';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { DbService } from 'src/db/db.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ingredient.name, schema: IngredientSchema },
    ]),
  ],
  controllers: [IngredientController],
  providers: [IngredientService, DbService],
})
export class IngredientModule {}
