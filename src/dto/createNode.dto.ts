import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsString, ValidateNested } from "class-validator";
import { OptionDto } from "./option.dto";

export class CreateNodeDto {
  @ApiProperty({ description: 'Identificador único del nodo' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Texto del fragmento de historia que se muestra' })
  @IsString()
  texto: string;

  @ApiProperty({
    description: 'Opciones de decisiones que puede tomar el usuario',
    type: [OptionDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OptionDto)
  opciones: OptionDto[];
}
