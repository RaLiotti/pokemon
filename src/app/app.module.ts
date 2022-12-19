import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetalhesPokemonComponent } from './detalhes-pokemon/detalhes-pokemon.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalhesPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
