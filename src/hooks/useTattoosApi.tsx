import { useCallback } from "react";
import axios from "axios";
import {
  TattooStructure,
  TattoosStateStructure,
} from "../store/features/tattoos/types";
import { UseTattoosApiStructure } from "./types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const useTattoosApi = (): UseTattoosApiStructure => {
  const dispatch = useAppDispatch();

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getTattoos = useCallback(async (): Promise<TattoosStateStructure> => {
    dispatch(showLoadingActionCreator());

    const { data: tattoos } = await axios.get<{ tattoos: TattooStructure[] }>(
      `/tattoos`,
    );
    dispatch(hideLoadingActionCreator());

    return tattoos;
  }, [dispatch]);

  return { getTattoos };
};

export default useTattoosApi;
