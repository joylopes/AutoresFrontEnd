import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from 'src/environments/globalVariables';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  quantidadeDeNomes: Subject<number> = new Subject<number>();
  baseUrl = Global.BaseUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text' as 'json'
  };

  constructor(private http: HttpClient) {

  }

  Adicionar(obj): Observable<any> {
    return this.http.post(this.baseUrl + "Autor/Adicionar", JSON.stringify(obj), this.httpOptions)
      .pipe(map(res => res = JSON.parse(res.toString())));
  }

  ListarAutoresComNomeFormatado(): Observable<any[]> {
    return this.http.get(this.baseUrl + "Autor/ListarAutoresComNomeFormatado", this.httpOptions)
      .pipe(map(res => res = JSON.parse(res.toString())));
  }
}
