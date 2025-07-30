import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUser {
   @ApiProperty({ description: 'Identificador único del nodo' })
   @IsOptional()
   @IsString()
   id?: string;

   @ApiProperty({ description: 'Email del usuario'})
   @IsNotEmpty()
   @IsString()
   email: string;

   @ApiProperty({ description: 'Contraseña del usuario' })
   @IsNotEmpty()
   @IsString()
   password: string;

   @ApiProperty({ description: 'Nombre del usuario' })
   @IsNotEmpty()
   @IsString()
   name: string;

   @ApiProperty({ description: 'Fecha de creación de usuario'})
   @IsDate()
   createdAt: Date;
}