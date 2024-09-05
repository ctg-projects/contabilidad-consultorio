import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AddItemFormComponent } from './features/add-item-form/add-item-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/add-item', component: AddItemFormComponent }

  //{ path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  //{ path: 'procedimientos-pacientes', loadChildren: () => import('./modules/procedimientos-pacientes/procedimientos-pacientes.module').then(m => m.ProcedimientosPacientesModule) },
  //{ path: 'ingreso-insumos', loadChildren: () => import('./modules/ingreso-insumos/ingreso-insumos.module').then(m => m.IngresoInsumosModule) },
  //{ path: 'procedimientos-disponibles', loadChildren: () => import('./modules/procedimientos-disponibles/procedimientos-disponibles.module').then(m => m.ProcedimientosDisponiblesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
