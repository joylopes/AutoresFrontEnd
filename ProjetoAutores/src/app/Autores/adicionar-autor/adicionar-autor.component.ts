import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/Services/Autor/autor.service';
import { FormGroup, Form, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adicionar-autor',
  templateUrl: './adicionar-autor.component.html',
  styleUrls: ['./adicionar-autor.component.css']
})
export class AdicionarAutorComponent implements OnInit {
  form: FormGroup;
  listaDeAutores: FormArray;
  listaDeAutoresCopia: any;
  constructor(
    public autorService: AutorService,
    private fb: FormBuilder
  ) {
    this.criarForm();
  }

  ngOnInit() {
    this.autorService.quantidadeDeNomes.subscribe(x => {
      this.limparEIniciarFormArray(x);
    });
  }

  criarForm() {
    this.form = this.fb.group({
      listaDeAutores: new FormArray([])
    })
  }

  iniciarFormArray(qtdDeNomes: number) {
    for (let i = 0; i < qtdDeNomes; i++) {
      this.listaDeAutores.push(
        this.fb.group({
          nome: new FormControl(this.listaDeAutoresCopia && this.listaDeAutoresCopia[i] ? this.listaDeAutoresCopia[i].nome : "", Validators.required)
        })
      );
    }
  }

  limparEIniciarFormArray(qtdDeNomes: number) {
    this.listaDeAutores = (this.form.get("listaDeAutores") as FormArray)
    this.listaDeAutoresCopia = this.form.value.listaDeAutores;
    this.limparFormArray();
    this.iniciarFormArray(qtdDeNomes);
  }

  limparFormArray() {

    while (this.listaDeAutores.length) {
      this.listaDeAutores.removeAt(0);
    }

  }

  adicionar() {
    this.autorService.Adicionar(this.form.value.listaDeAutores).subscribe(x => {
      if (x.length) {
        this.limparFormArray();
        this.autorService.atualizarSubjectQuantidadeDeNomes(0);
        this.autorService.listarAutores();
        Swal.fire('Autore(s) adicionado(s) com sucesso!')
      }
    });
  }

}
