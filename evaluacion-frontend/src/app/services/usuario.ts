import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz de usuario para el servicio
export interface Usuario {
  idUsuario?: number;
  nombre: string;
  correo: string;
  contrasenia: string;
  fechaRegistro?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // URL de la API
  private apiURL = 'http://localhost:3000/usuario';
  constructor(private http: HttpClient) {}

  // Método para obtener los usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiURL);
  }

  // Método para crear un usuario
  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiURL, usuario);
  }

  // Método para actualizar un usuario
  updateUsuario(idusuario: number, usuario: Usuario): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.apiURL}/${usuario.idUsuario}`, usuario);
  }

  // Método para eliminar un usuario
  deleteUsuario(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.apiURL}/${id}`);
  }
}
