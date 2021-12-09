import { Entity } from '@loopback/repository';
export declare class Estacion extends Entity {
    id?: string;
    nombre: string;
    direccion: string;
    coordx: string;
    coordy: string;
    tipo: string;
    constructor(data?: Partial<Estacion>);
}
export interface EstacionRelations {
}
export declare type EstacionWithRelations = Estacion & EstacionRelations;
