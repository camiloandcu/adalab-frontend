import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasDetailComponent } from './components/noticias-detail/noticias-detail.component';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: NoticiasListComponent,
    pathMatch: 'full' 
  },
  {
    path:':id',
    component: NoticiasDetailComponent,
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
