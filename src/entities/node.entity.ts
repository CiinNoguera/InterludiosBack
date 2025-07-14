import { ApiProperty } from "@nestjs/swagger";

export class NodeEntity {
  @ApiProperty({ description: 'Identificador único del nodo' })
  id: string;

  @ApiProperty({ description: 'Texto del fragmento de historia que se muestra' })
  texto: string;

  @ApiProperty({
    description: 'Opciones de decisiones que puede tomar el usuario',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        texto: { type: 'string' },
        nextId: { type: 'string' },
      },
    },
  })
  opciones: { texto: string; nextId: string }[];
}
