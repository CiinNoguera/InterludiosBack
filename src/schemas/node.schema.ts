import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

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
    type: 'array',
    items: {
      type: 'object',
      properties: {
        texto: { type: 'string' },
        nextId: { type: 'string' },
      },
    },
  })
  @Prop({ type: [{ texto: String, nextId: String }], default: [] })
  opciones: { texto: string; nextId: string }[];
}

export const NodeSchema = SchemaFactory.createForClass(Node);
