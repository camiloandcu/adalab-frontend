import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: NoticiasListComponent,
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
