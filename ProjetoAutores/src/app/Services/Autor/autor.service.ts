import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  quantidadeDeNomes: Subject<number> = new Subject<number>();

  constructor() { }
}
