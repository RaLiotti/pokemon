import { IPokemon } from '../interface/IPokemon';

export interface IPokemonApi {
    count: number;
    next: string;
    previous: string,
    results: Array<IPokemon>;
}
