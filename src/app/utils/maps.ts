export interface Mapa {
    id: number;
    name: string;
    smoke: MapaSlots[];
}

export interface MapaSlots {
    id: number;
    x: number;
    y: number;
    name: string;
    team: string;
    bombs: Bombs[];
}

export interface Bombs {
    id: number;
    name: string;
    keys: string[]
}