import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OptionsService } from './options.service';
import { OptionDto } from 'src/dto/option.dto';
import { Option, OptionDocument } from 'src/schemas/option.schema';

@ApiTags('Opciones')
@Controller('options')
export class OptionsController {
    constructor( private readonly optionService: OptionsService) {}

 
    @Post()
    @ApiOperation({summary: 'Crear una nueva opción'})
    @ApiResponse({ status: 201, description: 'Nueva opción creada exitosamente', type: Option })
    @ApiBody({ type: OptionDto })
    async createOption(@Body() optionDTO: OptionDto): Promise<OptionDocument> {
        return this.optionService.createOption(optionDTO);
    }

    @Get()
    @ApiOperation({summary: 'Obtener todas las opciones disponibles'})
    @ApiResponse({ status: 200, description: 'Lista de opciones', type: [Option] })
    async getAllOptions(): Promise<OptionDocument[]> {
        return this.optionService.getAllOptions();
    }

    @Get(':id')
    @ApiOperation({summary: 'Obtener una opción por id'})
    @ApiParam({ name: 'id', description: 'ID de la opción a buscar' })
    @ApiResponse({ status: 200, description: 'Lista de opciones', type: [Option] })
    async getOptionById(@Param('id') id: string): Promise<OptionDocument> {
        return this.optionService.getOptionById(id);
    }

    @Patch(':id')
    @ApiOperation({summary: 'Actualizar una opción existente'})
    @ApiParam({ name: 'id', description: 'ID de la opción a actualizar' })
    @ApiBody({ type: OptionDto })
    @ApiResponse({ status: 200, description: 'Opción actualizada correctamente'})
    async updateOption(
        @Param('id') id: string,
        @Body() optionDTO: OptionDto): Promise<OptionDocument> {
        return this.optionService.updateOption(id, optionDTO);
    }


    @Delete(':id')
    @ApiOperation({summary: 'Eliminar una opción existente'})
    @ApiParam({ name: 'id', description: 'ID de la opción a eliminar' })
    @ApiResponse({ status: 200, description: 'Opción eliminada correctamente' })
    async deleteOption(@Param('id') id: string) {
        return this.optionService.removeOption(id);
    }
}
