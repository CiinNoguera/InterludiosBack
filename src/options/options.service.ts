import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OptionDto } from 'src/dto/option.dto';
import { Option, OptionDocument } from 'src/schemas/option.schema';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class OptionsService {
    constructor(
        @InjectModel(Option.name) private readonly optionModel: Model<Option>
    ) {}

    async createOption(createOption : OptionDto) : Promise<OptionDocument> {
        const option = new this.optionModel({
            id: uuidv4(),
            ...createOption
        });
        return await option.save();
    }

    async getAllOptions() : Promise<OptionDocument[]> {
        return this.optionModel.find().exec();
    }

    async getOptionById(id: string) : Promise<OptionDocument> {
        const option = await this.optionModel.findOne({ id }).exec();
        if(!option) {
            throw new NotFoundException('Not found Option')
        }
        return option;
    }

    async updateOption(id: string, updateOption: Partial<OptionDto>) : Promise<OptionDocument> {
        const option = await this.optionModel.findOneAndUpdate({id}, updateOption, { new: true }).exec();
        if(!option) {
            throw new NotFoundException(`Opción con id "${id}" no encontrada`)
        }
        return option;
    }

    async removeOption(id: string) {
        const option = await this.optionModel.deleteOne({id}).exec();
        if(option.deletedCount === 0) {
            throw new NotFoundException(`Opción con id "${id}" no encontrada`)
        }
        return { message: `Opción con id "${id}" eliminada con éxito` };

    }

}
