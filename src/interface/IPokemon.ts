import { ITypesPokemon } from "./ITypesPokemon";

export interface IPokemon {
    name: string;
    url: string;
    abilities: [];
    base_experience: number;
    forms: [];
    game_indices: [];
    height: Number
    held_items: [];
    id: number
    is_default: boolean;
    location_area_encounters: string;
    moves: [];
    order: number
    past_types: [];
    // species: {name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon-species/10/'}
    // sprites: {back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png', back_female: null, back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/10.png', back_shiny_female: null, front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', …};
    stats: [];
    types: Array<ITypesPokemon>;
    weight: number;
}