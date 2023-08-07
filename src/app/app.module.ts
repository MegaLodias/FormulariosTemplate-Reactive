import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormularioReactiveComponent } from './components/formulario-reactive/formulario-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
