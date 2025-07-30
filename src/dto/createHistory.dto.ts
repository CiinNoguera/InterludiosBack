import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateHistory {
   @ApiProperty({ description: 'Titulo de historia'})
   @IsNotEmpty()
   @IsString()
   title: string;

   @ApiProperty({ description: 'Breve descripción' })
   @IsNotEmpty()
   @IsString()
   description: string;
}