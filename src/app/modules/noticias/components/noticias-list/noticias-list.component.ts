import { Component } from '@angular/core';
import { Noticia } from '@modules/noticias/models/noticia';
import { NoticiasService } from '@modules/noticias/services/noticias.service';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent {
  public noticias: Noticia[];

  constructor(private noticiaService: NoticiasService) {
    this.noticiaService.getAllNoticias().subscribe( r => {
      if(!r.error){
        this.noticias = r.data;
      }
    })
  }
}
