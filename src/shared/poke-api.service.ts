import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPokemonApi } from 'src/interface/IPokemonApi';
import { IPokemon } from 'src/interface/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(
    private httpCLiente: HttpClient
  ) { }

  public getAllPokemons(): Observable<IPokemonApi> {

    // let pokemonCompleto: IPokemonApi;

      // this.httpCLiente
      // .get(this.apiUrl)
      // .subscribe((planos) => {
      //   const p: any = planos;
      //   let pokemonCompleto: IPokemon = p.results;

      //   let pokeDetalhes: any = this.getDetalhes(p.results);

      // })

    return this.httpCLiente.get<IPokemonApi>(this.apiUrl);
  }


  public getDetalhes(pokemon: any): Array<any>{
    // debugger;

    let pokemons: Array<any> = [];

    pokemon.forEach((item: any) => {
      pokemons.push(this.httpCLiente.get<any>(item.url));
  });

    // debugger;

    // console.log(pokemons);


    return pokemons;
  }

}
