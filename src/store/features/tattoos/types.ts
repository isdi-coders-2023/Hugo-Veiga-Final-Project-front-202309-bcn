export interface TattooStructure {
  _id: string;
  artist: string;
  email: string;
  instagram: string;
  city: string;
  direction: string;
  style: string;
  image: string;
  notes: string;
  isFavorite: boolean;
}

export interface TattoosStateStructure {
  tattoos: TattooStructure[];
  tattoo: TattooStructure;
}

export interface TattooStructureWithoutId {
  artist: string;
  email: string;
  instagram: string;
  city: string;
  direction: string;
  style: string;
  image: string;
  notes: string;
  isFavorite: boolean;
}
