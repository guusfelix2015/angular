import { Component } from '@angular/core';

import { CursosService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService],
})
export class CursosComponent {
  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    this.cursosService = cursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
