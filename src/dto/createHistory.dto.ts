import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateHistory {
   @ApiProperty({ description: 'Identificador único del nodo' })
   @IsOptional()
   @IsString()
   id?: string;

   @ApiProperty({ description: 'Titulo de historia'})
   @IsNotEmpty()
   @IsString()
   title: string;

   @ApiProperty({ description: 'Breve descripción' })
   @IsNotEmpty()
   @IsString()
   description: string;

   @ApiProperty({ description: 'Nombre del autor' })
   @IsNotEmpty()
   @IsString()
   autor: string;

   @ApiProperty({ description: 'Fecha de creación'})
   @IsDate()
   createdAt: Date;
}