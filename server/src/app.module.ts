import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { RecipeModule } from './recipe/recipe.module';
import { getDatabaseUri } from './db.config';
import { DbService } from './db/db.service';
import { DbModule } from './db/db.module';

const dotenv = require('dotenv');
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(getDatabaseUri()),
    CategoryModule,
    IngredientModule,
    RecipeModule,
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
