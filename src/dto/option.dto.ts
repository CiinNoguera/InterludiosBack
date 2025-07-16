import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class OptionDto {
  @ApiProperty({ description: 'Texto que se muestra como opción para el usuario' })
  @IsString()
  texto: string;

  @ApiProperty({ description: 'ID del siguiente nodo al que lleva esta opción' })
  @IsOptional()
  @IsString()
  nextId?: string;

  @ApiProperty({ description: 'ID del nodo donde aparece esta opción' })
  @IsOptional()
  @IsString()
  nodeId: string;
}
