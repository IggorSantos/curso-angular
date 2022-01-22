import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  valor: number = 5;
  delete: boolean = false
  mudar(){
    this.valor++
  }
  deletar(){
    this.delete = true
  }
}
