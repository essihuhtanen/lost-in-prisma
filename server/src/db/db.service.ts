import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class DbService {
  constructor() {}

  private populationMap: { [key: string]: any } = {
    category: [],
    ingredient: [{ path: 'category' }],
    recipe: [
      {
        path: 'ingredients.ingredient',
        populate: {
          path: 'category',
        },
      },
    ],
  };

  async create(model: Model<any>, data: any): Promise<any> {
    const entity = new model(data);
    return await entity.save();
  }

  async update(model: Model<any>, id: string, data: any): Promise<any> {
    return model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(model: Model<any>, id: string): Promise<any> {
    return model.findByIdAndDelete(id).exec();
  }

  async getAll(entityName: string, model: Model<any>): Promise<any[]> {
    const populationOptions = this.populationMap[entityName] || [];
    return model.find().populate(populationOptions).exec();
  }

  async getById(
    entityName: string,
    model: Model<any>,
    id: string,
  ): Promise<any> {
    const populationOptions = this.populationMap[entityName] || [];
    return await model.findById(id).populate(populationOptions).exec();
  }
}
