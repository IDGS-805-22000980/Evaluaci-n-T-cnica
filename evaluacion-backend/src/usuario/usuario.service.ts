import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/usuario';
import { Repository } from 'typeorm';
import { CreateUsuarioDTO } from '../dtos/createUsuarioDTO';
import { UpdateUsuarioDTO } from 'src/dtos/updateUsuarioDTO';

@Injectable()
export class UsuarioService {
    constructor(@InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>) { }

    async create(CreateUsuarioDTO: CreateUsuarioDTO) {
        return await this.usuarioRepository.save(CreateUsuarioDTO);
    }

    async findAll() {
        return await this.usuarioRepository.find({ order: { idUsuario: 'ASC' } });
    }

    async update(idUsuario: number, UpdateUsuarioDTO: UpdateUsuarioDTO) {
        return await this.usuarioRepository.update(idUsuario, UpdateUsuarioDTO);
    }

    async delete(idUsuario: number) {
        return await this.usuarioRepository.delete(idUsuario);
    }
}


