import { IType } from "./IType";

export interface ITypesPokemon {
    slot: number;
    type: Array<IType>;
    url: string;
    weight: number;
}