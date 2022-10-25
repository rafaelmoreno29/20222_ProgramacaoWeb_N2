import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastraAlunoComponent } from './cadastra-aluno/cadastra-aluno.component';
import { MenuTopoComponent } from './compartilhado/menu-topo/menu-topo.component';
import { RodapeComponent } from './compartilhado/rodape/rodape.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CadastraAlunoComponent,
    MenuTopoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
