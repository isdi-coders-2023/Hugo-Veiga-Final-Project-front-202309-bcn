import {
  TattooStructure,
  TattooStructureWithoutId,
  TattoosStateStructure,
} from "../store/features/tattoos/types";

export interface UseTattoosApiStructure {
  getTattoos: () => Promise<TattoosStateStructure | void>;
  deleteTattoo: (tattooId: string) => Promise<TattoosStateStructure | void>;
  addTattoo: () => Promise<TattooStructureWithoutId | void>;
  getTattooById: () => Promise<TattooStructure>;
}
