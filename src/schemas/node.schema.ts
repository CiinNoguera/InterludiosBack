import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Option } from './option.schema';
import * as mongoose from 'mongoose';


export type NodeDocument = Node & Document;

@Schema()
export class Node {
  @ApiProperty({ description: 'Identificador único del nodo' })
  @Prop({ required: true, unique: true })
  id: string;

  @ApiProperty({ description: 'Texto del fragmento de historia que se muestra' })
  @Prop({ required: true })
  texto: string;

  @ApiProperty({
    description: 'IDs de las opciones asociadas a este nodo',
    type: () => [Option],
    example: ['64f8b3f1a9a7c12345678901', '64f8b3f1a9a7c12345678902'],
  })
  @Prop({ type: [{  type: mongoose.Schema.Types.ObjectId, ref: 'Option'  }], default: [] })
  opciones: (Types.ObjectId | Option)[];
}

export const NodeSchema = SchemaFactory.createForClass(Node);
