import { useCallback } from "react";
import axios from "axios";
import {
  TattooStructure,
  TattoosStateStructure,
} from "../store/features/tattoos/types";
import { UseTattoosApiStructure } from "./types";

const useTattoosApi = (): UseTattoosApiStructure => {
  const getTattoos = useCallback(async (): Promise<TattoosStateStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    const { data: tattoos } = await axios.get<{ tattoos: TattooStructure[] }>(
      `/tattoos`,
    );

    return tattoos;
  }, []);

  return { getTattoos };
};

export default useTattoosApi;
