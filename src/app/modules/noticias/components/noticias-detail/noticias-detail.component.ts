import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '@core/services/notification.service';
import { Noticia } from '@modules/noticias/models/noticia';
import { NoticiasService } from '@modules/noticias/services/noticias.service';

@Component({
  selector: 'app-noticias-detail',
  templateUrl: './noticias-detail.component.html',
  styleUrls: ['./noticias-detail.component.scss']
})
export class NoticiasDetailComponent implements OnInit {
  public id: number;
  public currentNoticia: Noticia;
  public url: string;

  constructor(private route: ActivatedRoute, private noticiaService: NoticiasService, private notifService: NotificationService) {
    this.id = this.route.snapshot.params['id'];
    this.url = window.location.href;
  }

  ngOnInit(): void {
    this.noticiaService.getNoticiaById(this.id).subscribe(r =>{
      if(!r.error){
        this.currentNoticia = r.data;
      }
    })
  }

  notifCopiar(){
    this.notifService.showSuccess('Enlace copiado')
  }
}
