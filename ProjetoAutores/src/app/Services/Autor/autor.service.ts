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
  lstDeNomes: Subject<any> = new Subject<any>();

  baseUrl = Global.BaseUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text' as 'json'
  };

  constructor(private http: HttpClient) {

  }

  listarAutores() {
    this.ListarAutoresComNomeFormatado().subscribe(x => {
      this.lstDeNomes.next(x);
    });
  }

  atualizarSubjectQuantidadeDeNomes(qtd: number) {
    this.quantidadeDeNomes.next(qtd);
  }

  Adicionar(obj): Observable<any[]> {
    return this.http.post(this.baseUrl + "Autores/Adicionar", JSON.stringify(obj), this.httpOptions)
      .pipe(map(res => res = JSON.parse(res.toString())));
  }

  ListarAutoresComNomeFormatado(): Observable<any[]> {
    return this.http.get(this.baseUrl + "Autores/ListarAutoresComNomeFormatado", this.httpOptions)
      .pipe(map(res => res = JSON.parse(res.toString())));
  }
}
