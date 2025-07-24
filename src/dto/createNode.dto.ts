import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator";
import { OptionDto } from "./option.dto";

export class CreateNodeDto {
  @ApiProperty({ description: 'Identificador único del nodo' })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({ description: 'Indica si el nodo es un nodo raíz' })
  @IsOptional()
  @IsBoolean()
  raiz?: boolean;

  @ApiProperty({ description: 'Texto del fragmento de historia que se muestra' })
  @IsString()
  texto: string;

  @ApiProperty({
    description: 'IDs de las opciones asociadas a este nodo',
    type: [String],
    example: ['64f8b3f1a9a7c12345678901', '64f8b3f1a9a7c12345678902'],
  })
  @IsOptional()
  @IsArray()
  opciones?: string[];
}
