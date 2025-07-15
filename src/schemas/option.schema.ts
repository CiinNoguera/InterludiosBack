import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type OptionDocument = Option & Document;

@Schema()
export class Option {
  @ApiProperty({ description: 'ID único de la opción' })
  @Prop({ required: true, unique: true })
  id: string;

  @ApiProperty({ description: 'Texto que se muestra como opción para el usuario' })
  @Prop({ required: true })
  texto: string;

  @ApiProperty({ description: 'ID del siguiente nodo al que lleva esta opción' })
  @Prop({ required: true })
  nextId: string;

  @ApiProperty({ description: 'ID del nodo de origen donde se encuentra esta opción' })
  @Prop({ required: true })
  nodeId: string; 
}

export const OptionSchema = SchemaFactory.createForClass(Option);
