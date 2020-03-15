import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/Services/Autor/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  qtdDeNomes: number = 0;
  constructor(
    private autorService: AutorService
  ) { }

  ngOnInit() {
  }

  atualizarQtdNomes() {
    if (this.qtdDeNomes != null)
      this.autorService.quantidadeDeNomes.next(this.qtdDeNomes);
  }
}
