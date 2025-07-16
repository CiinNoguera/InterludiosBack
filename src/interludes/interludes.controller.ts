import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InterludesService } from './interludes.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateNodeDto } from 'src/dto/createNode.dto';
import { Node } from 'src/schemas/node.schema';

@ApiTags('Interludios')
@Controller('interludes')
export class InterludesController {
    constructor(private readonly interludesService: InterludesService) {}

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo nodo de historia' })
    @ApiResponse({ status: 201, description: 'Nodo creado exitosamente', type: Node })
    @ApiBody({ type: CreateNodeDto })
    async create(@Body() createNode: CreateNodeDto) : Promise<Node> {
        return this.interludesService.create(createNode);
    }

    
    @Get()
    @ApiOperation({ summary: 'Obtener todos los nodos' })
    @ApiResponse({ status: 200, description: 'Lista de nodos', type: [Node] })
    async getAll() : Promise<Node[]>{
        return this.interludesService.getAll();
    }

   
    @Get(':id')
    @ApiOperation({ summary: 'Obtener un nodo por ID' })
    @ApiParam({ name: 'id', description: 'ID del nodo a buscar' })
    @ApiResponse({ status: 200, description: 'Nodo encontrado', type: Node })
    async getOne(@Param('id') id: string) : Promise<Node> {
        return this.interludesService.getOneById(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar un nodo por ID' })
    @ApiParam({ name: 'id', description: 'ID del nodo a actualizar' })
    @ApiBody({ type: CreateNodeDto })
    @ApiResponse({ status: 200, description: 'Nodo actualizado' })
    async update(
        @Param('id') id: string,
        @Body() updateNode: CreateNodeDto) {
            return this.interludesService.update(id, updateNode);
        }

    
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un nodo por ID' })
    @ApiParam({ name: 'id', description: 'ID del nodo a eliminar' })
    @ApiResponse({ status: 200, description: 'Nodo eliminado' })
    async delete(@Param('id') id: string) {
        return this.interludesService.remove(id);
    }
}
