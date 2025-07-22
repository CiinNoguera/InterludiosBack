import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export type OptionDocument = Option & Document;

@Schema()
export class Option {
  @ApiProperty({ description: 'ID único de la opción' })
 @Prop({ 
    required: true,
    type: String,
    default: () => uuidv4()})
  id: string;

  @ApiProperty({ description: 'Texto que se muestra como opción para el usuario' })
  @Prop({ required: true })
  texto: string;

  @ApiProperty({ description: 'ID del siguiente nodo al que lleva esta opción' })
  @Prop()
  nextId?: string;

  @ApiProperty({ description: 'ID del nodo de origen donde se encuentra esta opción' })
  @IsOptional()
  @Prop()
  nodeId?: string; 
}

export const OptionSchema = SchemaFactory.createForClass(Option);
