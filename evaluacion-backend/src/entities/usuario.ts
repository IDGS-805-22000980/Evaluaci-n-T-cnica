// Entidad para el modelo de usuario
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('Usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ length: 100, unique: true })
    correo: string;

    @Column({ length: 100 })
    contrasenia: string;

    @CreateDateColumn()
    fechaRegistro: Date;
}
