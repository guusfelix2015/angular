import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mudarValor() {
    this.valor++;
  }

  deletarCiclo: boolean = false;

  destruirCiclo() {
    this.deletarCiclo = true;
  }

  valor: number = 5;
}
