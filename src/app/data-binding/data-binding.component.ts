import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  link: string = "https://github.com/IggorSantos"
  imgLink: string = "https://arquivo.devmedia.com.br/noticias/documentacao/documentacao_angular-cli-como-rodar-testes-e-checar-o-codigo_38248.png"
  mostrar(){
    alert("Você clicou no botão")
  }
  nome: string = ' '
  constructor() { }

  ngOnInit(): void {


  }

}
