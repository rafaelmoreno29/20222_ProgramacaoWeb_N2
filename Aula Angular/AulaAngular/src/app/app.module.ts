import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoModule } from './curso/curso.module';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
