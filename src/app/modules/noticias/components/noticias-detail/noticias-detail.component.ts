import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private noticiaService: NoticiasService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.noticiaService.getNoticiaById(this.id).subscribe(r =>{
      if(!r.error){
        this.currentNoticia = r.data;
      }
    })
  }
}
