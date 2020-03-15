import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/Services/Autor/autor.service';

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.css']
})
export class ListarAutoresComponent implements OnInit {

  listaDeAutoresNome: any[] = [];
  constructor(
    private autorService: AutorService
  ) {
    this.autorService.lstDeNomes.subscribe(x => {
      this.listaDeAutoresNome = x;
    });
  }

  ngOnInit() {
  }

}
