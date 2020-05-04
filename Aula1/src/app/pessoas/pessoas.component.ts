import { Component, OnInit } from '@angular/core';
import { pessoas } from '../pessoas.model';
import {PessoasService } from '../pessoas.service';
import { ɵangular_packages_core_testing_testing_a } from '@angular/core/testing';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  pessoasArray: Pessoa  [] = [];
  pessoa: PessoasComponent;
  detallhesPessoa: boolean = false;


  constructor() {private pessoasService: PessoasService }

  ngOnInit(): void {
    this.pessoasArray = this.pessoasService.getPessoas();
    console.log(this.pessoasArray);
  }

  detalheDaPessoa(id){
    this,pessoasArry.forEach(_pessoa =>{
      if (_pessoa.id == id){
        this.pessoa = _pessoa;
      }
    })
  }
  alterarPEssoa(_pessoa){
    this.pessoasArray.forEach(pessoa =>{
      if(pessoa.id == ɵangular_packages_core_testing_testing_a.id)
      pessoa.name = +pessoa.name
    })
  }


  
}
