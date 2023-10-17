import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { RecipeModule } from './recipe/recipe.module';

const dotenv = require('dotenv');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI),
    CategoryModule,
    IngredientModule,
    RecipeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
