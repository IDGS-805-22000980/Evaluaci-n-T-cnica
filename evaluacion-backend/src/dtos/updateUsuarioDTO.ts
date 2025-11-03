// DTO para actualizar un usuario, siendo un partial del DTO de creación
import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDTO } from './createUsuarioDTO';

export class UpdateUsuarioDTO extends PartialType(CreateUsuarioDTO) {}