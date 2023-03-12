import { Component, Input } from '@angular/core';
import { Noticia } from '@modules/noticias/models/noticia';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.scss']
})
export class NoticiaCardComponent {
  @Input() noticia: Noticia;
}
