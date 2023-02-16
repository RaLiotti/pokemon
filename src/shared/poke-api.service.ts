import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPokemonApi } from 'src/interface/IPokemonApi';
import { IPokemon } from 'src/interface/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(
    private httpCLiente: HttpClient,
  ) { }

  public getAllPokemons() {
    // debugger
    return this.httpCLiente.get<any>(this.apiUrl);

  }


  public getDetalhes(urlDetalhe: string){
    return this.httpCLiente.get<any>(urlDetalhe);
  }

  public buscarEndpoints(urlDetalhe: string){
    // this.httpCLiente.get(urlDetalhe).forEach()
  }

}
