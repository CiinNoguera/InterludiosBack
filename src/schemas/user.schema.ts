import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @ApiProperty({ description: 'Identificador único del nodo' })
  @Prop({ 
    required: true,
    type: String,
    default: () => uuidv4()})
  id: string;

  @ApiProperty({ description: 'Email del usuario'})
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({ description: 'Contraseña del usuario'})
  @Prop({ required: true })
  password: string;


  @ApiProperty({ description: 'Nombre del usuario'})
  @Prop({ required: true })
  name: string;

  @ApiProperty({ description: 'Fecha de creación del usuario'})
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
