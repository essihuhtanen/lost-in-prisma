import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';

const dotenv = require('dotenv');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

@Module({
  imports: [MongooseModule.forRoot(MONGO_URI), CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
