import { TattoosStateStructure } from "../store/features/tattoos/types";

export interface UseTattoosApiStructure {
  getTattoos: () => Promise<TattoosStateStructure | void>;
}
