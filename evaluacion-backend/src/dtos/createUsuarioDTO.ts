import { IsNull } from "typeorm";

// DTO para crear un usuario
export class CreateUsuarioDTO {
    idUsuario: number;
    nombre: string;
    correo: string;
    contrasenia: string;
    fechaRegistro: Date;
}