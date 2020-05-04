import { Component, OnInit } from '@angular/core';
import { pessoas } from '../pessoas/pessoas.model';
import {PessoasService } from '../pessoas/pessoas.service';

import { ɵangular_packages_core_testing_testing_a } from '@angular/core/testing';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  pessoasArray: pessoas  [] = [];
  pessoa: PessoasComponent;
  detallhesPessoa: boolean = false;


  constructor(private pessoasService: PessoasService) {

  }

  ngOnInit(): void {
    this.pessoasArray = this.pessoasService.getPessoas();
    console.log(this.pessoasArray);
  }

  detalheDaPessoa(id){
    this.pessoasArray.forEach(_pessoa =>{
      if (_pessoa.id == id){
        this.pessoa = _pessoa;
      }
    })
  }
  alterarPessoa(_pessoa){
    this.pessoasArray.forEach(pessoa =>{
      if(pessoa.id == pessoa.id)
      pessoa.name = _pessoa.name
    })
  }


  
}
