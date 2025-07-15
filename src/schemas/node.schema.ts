import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Option, OptionSchema } from './option.schema';

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
    description: 'Opciones de decisiones que puede tomar el usuario',
    type: [Option],
  })
  @Prop({ type: [OptionSchema], default: [] })
  opciones: Option[];
}

export const NodeSchema = SchemaFactory.createForClass(Node);
