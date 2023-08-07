import { Component } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  cedula: string = '';
  nombre: string = '';
  fechaNacimiento: string = '';
  ciudad: string = '';

  submitForm() {
    console.log('Formulario enviado:');
    console.log('Cédula:', this.cedula);
    console.log('Nombre:', this.nombre);
    console.log('Fecha de Nacimiento:', this.fechaNacimiento);
    console.log('Ciudad:', this.ciudad);
  }
  cancelar() {
    // Agregar lógica para cancelar el formulario si es necesario
    console.log('Formulario cancelado');
    this.cedula = '';
    this.nombre = '';
    this.fechaNacimiento = '';
    this.ciudad = '';
  }
}
