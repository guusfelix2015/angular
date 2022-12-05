import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css'],
})
export class MeuFormComponent {
  nome: string = 'abc';

  pessoa = {
    nome: 'Gustavo',
    idade: 20,
  };
}
