import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosService } from './cursos/curso.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursoModule } from './cursos/curso.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CriarCursoModule, CursoModule],
/*   providers: [CursosService], */
  bootstrap: [AppComponent],
})
export class AppModule {}
