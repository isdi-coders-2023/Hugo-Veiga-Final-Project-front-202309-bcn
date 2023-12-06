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
import { toast } from "react-toastify";

const useTattoosApi = (): UseTattoosApiStructure => {
  const dispatch = useAppDispatch();

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getTattoos =
    useCallback(async (): Promise<TattoosStateStructure | void> => {
      dispatch(showLoadingActionCreator());
      try {
        const { data: tattoos } = await axios.get<{
          tattoos: TattooStructure[];
        }>(`/tattoos`);

        dispatch(hideLoadingActionCreator());

        return tattoos;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Error loading tattoos", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }, [dispatch]);

  return { getTattoos };
};

export default useTattoosApi;
