import { Component } from '@angular/core';
import { CursosService } from '../cursos/curso.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursosService],
})
export class CriarCursoComponent {
  cursos: string[] = [];

  constructor(private cursoService: CursosService) {}

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso: string) {
    this.cursoService.addCurso(curso);
  }
}
