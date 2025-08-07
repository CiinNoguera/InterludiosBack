import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUser } from 'src/dto/createUser.dto';
import { User } from 'src/schemas/user.schema';

@ApiTags('Usuarios')
@Controller('user')
export class UserController {
    constructor( private readonly userService: UserService) {}

    @Get()
    @ApiOperation({summary: 'Lista de usuarios'})
    @ApiResponse({status: 200, description: 'Lista de usuarios'})
    async getAll(): Promise<User[]> {
        return await this.userService.getAllUsers();
    }

    @Get('email/:email')
    @ApiOperation({summary: 'Obtener usuario por su email'})
    @ApiResponse({status: 200, description: 'Usuario encontrado'})
    async getUserByEmail(@Param('email') email: string): Promise<Partial<User>> {
        return await this.userService.getUserByEmail(email);
    }

    @Post()
    @ApiOperation({summary: 'Crear un nuevo usuario'})
    @ApiResponse({status: 201, description: 'Usuario creado'})
    async createUser(@Body() user: CreateUser): Promise<Partial<User>> {
        return await this.userService.createUser(user);
    }

    @Get(':id')
    @ApiOperation({summary: 'Obtener usuario por su id'})
    @ApiResponse({status: 200, description: 'Usuario encontrado'})
    async getUserById(@Param('id') id: string): Promise<Partial<User>> {
        return await this.userService.getUserById(id);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Eliminar usuario por su id'})
    @ApiResponse({status: 200, description: 'Usuario eliminado'})
    async deleteUser(@Param('id') id: string): Promise<string> {
        return await this.userService.removeUser(id);
    }

    @Put(':id')
    @ApiOperation({summary: 'Actualizar usuario por su id'})
    @ApiResponse({status: 200, description: 'Usuario actualizado'})
    async updateUser(
        @Param('id') id: string, 
        @Body() user: CreateUser)
        : Promise<Partial<User>> {
        return await this.userService.updateUser(id, user);
    }

}
