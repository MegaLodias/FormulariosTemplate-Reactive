import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormularioReactiveComponent } from './components/formulario-reactive/formulario-reactive.component';

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: '+', component: FormularioReactiveComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'formulario'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
