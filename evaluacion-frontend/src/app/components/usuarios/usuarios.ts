import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService, Usuario } from '../../services/usuario';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  // Se crea un array de usuarios para mostrarlos en la interfaz
  // Se crea un objeto de usuario para mostrarlo en la interfaz
  // Se crea un booleano para saber si se está editando un usuario
  usuarios = signal<Usuario[]>([]);
  usuarioActual: Usuario = { nombre: '', correo: '', contrasenia: '' };
  editando = signal(false);

  constructor(private usuarioService: UsuarioService) { }

  // Método para inicializar la aplicación
  ngOnInit() {
    this.cargarUsuarios();
  }

  // Método para cargar los usuarios
  cargarUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => this.usuarios.set(data));
  }

  // Método para guardar o deitar un usuario dependiendo de lo que se este haciendo
  guardarUsuario() {
    if (this.editando()) {
      this.usuarioService.updateUsuario(this.usuarioActual.idUsuario!, this.usuarioActual)
        .subscribe(() => {
          this.cancelarEdicion();
          this.cargarUsuarios();
        });
    } else {
      this.usuarioService.createUsuario(this.usuarioActual)
        .subscribe(() => {
          this.usuarioActual = { nombre: '', correo: '', contrasenia: '' };
          this.cargarUsuarios();
        });
    }
  }

  // Método para editar un usuario
  editarUsuario(usuario: Usuario) {
    this.usuarioActual = { ...usuario };
    this.editando.set(true);
  }

  // Método para cancelar la edición de un usuario
  cancelarEdicion() {
    this.usuarioActual = { nombre: '', correo: '', contrasenia: '' };
    this.editando.set(false);
  }

  // Método para eliminar un usuario
  eliminarUsuario(id: number) {
    if (confirm('¿Seguro que deseas eliminar este usuario?')) {
      this.usuarioService.deleteUsuario(id).subscribe(() => this.cargarUsuarios());
    }
  }
}
