import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type HistoryDocument = History & Document;

@Schema()
export class History extends Document {
  @ApiProperty({ description: 'Identificador único del nodo' })
  @Prop({ 
    required: true,
    type: String,
    default: () => uuidv4()})
  id: string;

  @ApiProperty({ description: 'Titulo'})
  @Prop({ required: true })
  title: string;

  @ApiProperty({ description: 'Breve descripción de la historia'})
  @Prop({ required: true })
  description: string;

  @ApiProperty({ description: 'Nombre del autor'})
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  autor: Types.ObjectId;

  @ApiProperty({ description: 'Fecha de creación'})
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const HistorySchema = SchemaFactory.createForClass(History);
