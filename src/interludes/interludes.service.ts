import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNodeDto } from 'src/dto/createNode.dto';
import { Node } from 'src/schemas/node.schema';
import { Option } from 'src/schemas/option.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InterludesService {
    constructor(
        @InjectModel(Node.name) private nodeModel: Model<Node>,
        @InjectModel(Option.name) private optionModel: Model<Option>
    ) {}

    async create(createNode: CreateNodeDto) : Promise<Node> {
        if(createNode.id) {
            const existing = await this.nodeModel.findOne({id: createNode.id});
        if (existing) {
            throw new BadRequestException(`Ya existe un nodo con id "${createNode.id}"`);
            }
        } else {   
            createNode.id = uuidv4();
        }

        const node = new this.nodeModel(createNode);
        await node.save();

        const options = await this.optionModel.find({ nodeId: node.id }).exec();
        node.opciones = options.map((opt) => opt._id);
        await node.save();

        return node;
  }

    async getAll() : Promise<Node[]> {
        return this.nodeModel.find().populate('opciones').exec();
    }
    async getOneById(id: string) : Promise<Node> {
        const node = await this.nodeModel.findOne({id}).populate('opciones').exec();
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
