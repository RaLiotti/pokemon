import { Component, EventEmitter, Output } from '@angular/core';
import { IPokemon } from 'src/interface/IPokemon';
import { PokeApiService } from 'src/shared/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  pokemonsDetalhado: Array<IPokemon> = [];
  allPokemons: Array<IPokemon> = [];

  @Output() visualizarPokemon = new EventEmitter();
  pokemonDetalhes: IPokemon | undefined;

  exibirPokemons = true;

  constructor(
    private service: PokeApiService,
  ) { }

  ngOnInit(): void {
    
    this.buscarPokemons();

    setTimeout(()=>{ 
      this.detalhesPokemon();
    },5000);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    
  }

  buscarPokemons(){
    this.service.getAllPokemons()
    .subscribe( pokemon => {
      // debugger
      this.allPokemons = pokemon.results;
  });

}

 detalhesPokemon(){
    this.allPokemons.forEach(item => {
      this.service.getDetalhes(item.url)
      .subscribe(response => {
        response.url = item.url;
          this.pokemonsDetalhado.push(response);
      })
    });
    // debugger
    console.log(this.pokemonsDetalhado)

    // setTimeout(()=>{
    //   debugger
    //   console.log(this.pokemonsDetalhado[0].types[0].type);
    // },500)
    
  }

  detalharPokemon(id: number){
    console.log("teste" + id)
    this.exibirPokemons = false;
    this.pokemonDetalhes = this.pokemonsDetalhado.find( a => a.id == id);
  }

}