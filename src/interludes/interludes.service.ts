import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNodeDto } from 'src/dto/createNode.dto';
import { Node } from 'src/schemas/node.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InterludesService {
    constructor(
        @InjectModel(Node.name) private nodeModel: Model<Node>
    ) {}

    async create(createNode: CreateNodeDto) : Promise<Node> {
        const newNode = new this.nodeModel({
        id: uuidv4(),
        ...createNode
    });
    return newNode.save();
  }

  async getAll() : Promise<Node[]> {
    return this.nodeModel.find().exec();
  }
   async getOneById(id: string) : Promise<Node> {
     const node = await this.nodeModel.findOne({id}).exec();
     if(!node) {
        throw new NotFoundException(`Nodo con id "${id}" no encontrado`)
     }
     return node;
   }

   async update(id: string, updateNode: Partial<CreateNodeDto>) : Promise<Node> {
    const node = await this.nodeModel.findOneAndUpdate({id}, updateNode , {new: true}).exec();
    if(!node) {
        throw new NotFoundException(`Nodo con id "${id}" no encontrado`)
    }
    return node;
   }

   async remove(id: string){
    const node = await this.nodeModel.deleteOne({id});
    if(node.deletedCount === 0) {
        throw new NotFoundException(`Nodo con id "${id}" no encontrado`)
    }
    return {
        message: `Nodo con id "${id}" eliminado con éxito`
    }
   }
}
