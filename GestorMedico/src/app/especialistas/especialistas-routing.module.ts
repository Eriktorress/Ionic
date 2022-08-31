import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialistasPage } from './especialistas.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialistasPage
  },
  {
    path: ':especialistaID',
    loadChildren: () => import('./informacion/informacion.module').then( m => m.InformacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialistasPageRoutingModule {}
