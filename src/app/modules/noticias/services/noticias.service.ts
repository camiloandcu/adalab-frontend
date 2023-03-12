import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { catchError, map, Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  public url = environment.uri;

  constructor(private http: HttpClient) {}

  getAllNoticias(): Observable<{
    error: boolean;
    msg: string;
    data: Noticia[];
  }> {
    const response = { error: false, msg: '', data: [] as Noticia[] };
    return this.http.get<Noticia[]>(this.url + 'noticias').pipe(
      map((r) => {
        response.data = r;
        return response;
      })
    );
  }

  getNoticiaById(id: number): Observable<{
    error: boolean;
    msg: string;
    data: Noticia;
  }> {
    let noticia: any
    const response = { error: false, msg: '', data: noticia as Noticia};
    return this.http.get<Noticia>(this.url + 'noticias/' + id).pipe(
      map(r => {
        response.data = r;
        return response;
      })
    );
  }
}
