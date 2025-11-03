import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDTO } from 'src/dtos/createUsuarioDTO';
import { UpdateUsuarioDTO } from 'src/dtos/updateUsuarioDTO';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Get()
    async findAll() {
        return await this.usuarioService.findAll();
    }

    @Post()
    async create(@Body() CreateUsuarioDTO: CreateUsuarioDTO) {
        return this.usuarioService.create(CreateUsuarioDTO);
    }

    @Patch(':idUsuario')
    async update(@Param('idUsuario', ParseIntPipe) idUsuario: number, @Body() UpdateUsuarioDTO: UpdateUsuarioDTO) {
        return this.usuarioService.update(idUsuario, UpdateUsuarioDTO);
    }

    @Delete(':idUsuario')
    async delete(@Param('idUsuario', ParseIntPipe) idUsuario: number) {
        return this.usuarioService.delete(idUsuario);
    }
}
