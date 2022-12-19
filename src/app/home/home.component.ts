import { Component } from '@angular/core';
import { IPokemon } from 'src/interface/IPokemon';
import { PokeApiService } from 'src/shared/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private service: PokeApiService
  ) { }

  pokemons: Array<IPokemon> = [];

  ngOnInit(): void {
    this.buscarPokemons(); 
  }

  buscarPokemons(){
    this.service.getAllPokemons()
    .subscribe( pokemon => {
      pokemon.results.forEach(element => {
        this.pokemons.push(element);
      });
      console.log(this.pokemons);
    })
  }

}
