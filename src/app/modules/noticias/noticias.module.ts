import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { SharedModule } from '@shared/shared.module';
import { NoticiasDetailComponent } from './components/noticias-detail/noticias-detail.component';

@NgModule({
  declarations: [NoticiasListComponent, NoticiasDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    NoticiasRoutingModule,
    MatProgressSpinnerModule,
    ClipboardModule,
    MatTooltipModule
  ],
})
export class NoticiasModule {}
