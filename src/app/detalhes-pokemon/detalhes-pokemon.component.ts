import { Component, Input } from '@angular/core';
import { IPokemon } from 'src/interface/IPokemon';

@Component({
  selector: 'app-detalhes-pokemon',
  templateUrl: './detalhes-pokemon.component.html',
  styleUrls: ['./detalhes-pokemon.component.scss']
})
export class DetalhesPokemonComponent {

  // @Input() detalhar: IPokemon | undefined;

  @Input() detalhar: IPokemon | undefined;


  ngOnInit(): void {
    console.log(this.detalhar);
  }

}
