import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/Services/Autor/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  qtdDeNomes: number = 1;
  constructor(
    private autorService: AutorService
  ) { }

  ngOnInit() {
  }

  atualizarQtdNomes() {
    this.autorService.quantidadeDeNomes.next(this.qtdDeNomes);
  }
}
