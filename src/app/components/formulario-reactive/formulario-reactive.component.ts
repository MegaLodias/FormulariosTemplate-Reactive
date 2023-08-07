import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css']
})
export class FormularioReactiveComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ciudad: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.formulario.valid) {
      console.log('Formulario enviado:');
      console.log('Cédula:', this.formulario.get('cedula')?.value);
      console.log('Nombre:', this.formulario.get('nombre')?.value);
      console.log('Fecha de Nacimiento:', this.formulario.get('fechaNacimiento')?.value);
      console.log('Ciudad:', this.formulario.get('ciudad')?.value);
    } else {
      console.log('Formulario inválido. Revise los campos.');
    }
  }

  cancelar() {
    this.formulario.reset();
  }
}