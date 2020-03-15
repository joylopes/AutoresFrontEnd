import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/Services/Autor/autor.service';

@Component({
  selector: 'app-adicionar-autor',
  templateUrl: './adicionar-autor.component.html',
  styleUrls: ['./adicionar-autor.component.css']
})
export class AdicionarAutorComponent implements OnInit {
  qtdDeNomes: number = 1;
  constructor(
    public autorService: AutorService
  ) { }

  ngOnInit() {
    this.autorService.quantidadeDeNomes.subscribe(x => {
      this.qtdDeNomes = x;
    });
  }

}
