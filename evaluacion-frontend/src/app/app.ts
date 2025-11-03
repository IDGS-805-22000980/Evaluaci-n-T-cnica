import { Component } from '@angular/core';
import { Usuarios } from './components/usuarios/usuarios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Usuarios],
  template: '<app-usuarios></app-usuarios>'
})
export class AppComponent {}
