import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastrosComponent } from './cadastro/cadastros.component';
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './curso/cursos.component';
import { HeaderComponent } from './header.component';



@NgModule({
    declarations: [
        AppComponent, CadastroComponent, CursoComponent, CadastrosComponent, CursosComponent, HeaderComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}