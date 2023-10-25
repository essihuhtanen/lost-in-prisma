import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Recipe, RecipeSchema } from 'src/schemas/recipe.schema';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { DbService } from 'src/db/db.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }]),
  ],
  controllers: [RecipeController],
  providers: [RecipeService, DbService],
})
export class RecipeModule {}
