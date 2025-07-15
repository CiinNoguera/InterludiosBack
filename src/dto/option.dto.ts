import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class OptionDto {
  @ApiProperty({ description: 'Texto que se muestra como opción para el usuario' })
  @IsString()
  texto: string;

  @ApiProperty({ description: 'ID del siguiente nodo al que lleva esta opción' })
  @IsString()
  nextId: string;

  @ApiProperty({ description: 'ID del nodo donde aparece esta opción' })
  @IsString()
  nodeId: string;
}
