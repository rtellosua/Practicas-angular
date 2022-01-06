import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { heroesModule } from './heroes/heroes.module';
import { contadoresModule } from './contadores/contadores.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    heroesModule,
    contadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
