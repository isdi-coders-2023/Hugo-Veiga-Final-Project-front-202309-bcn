import { useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  TattooStructure,
  TattooStructureWithoutId,
} from "../store/features/tattoos/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { useNavigate } from "react-router-dom";

const useTattoosApi = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getTattoos = useCallback(async () => {
    dispatch(showLoadingActionCreator());
    try {
      const { data: tattoos } = await axios.get<{
        tattoos: TattooStructure[];
      }>(`/tattoos`);

      dispatch(hideLoadingActionCreator());

      return tattoos;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      throw new Error((error as Error).message);
    }
  }, [dispatch]);

  const deleteTattoo = useCallback(
    async (tattooId: string) => {
      dispatch(showLoadingActionCreator());
      try {
        const { data } = await axios.delete(`/tattoos/delete/${tattooId}`);

        dispatch(hideLoadingActionCreator());

        toast.success("Tattoo deleted succesfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("There was an error deleting the tattoo", {
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
    },
    [dispatch],
  );

  const addTattoo = useCallback(
    async (
      newTattoo: TattooStructureWithoutId,
    ): Promise<TattooStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { tattoo },
        } = await axios.post<{ tattoo: TattooStructure }>(
          `/tattoos/add`,
          newTattoo,
        );

        toast.success("The tattoo has been created succesfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        dispatch(hideLoadingActionCreator());

        navigate("/tattoos");

        scrollTo(0, 0);

        return tattoo;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("There was an error creating the tattoo", {
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
    },
    [dispatch, navigate],
  );

  const getTattoo = useCallback(
    async (_id: string): Promise<TattooStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { tattoo },
        } = await axios.get<{ tattoo: TattooStructure }>(`/tattoos/${_id}`);

        scrollTo(0, 0);

        dispatch(hideLoadingActionCreator());

        return tattoo;
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        throw new Error((error as Error).message);
      }
    },
    [dispatch],
  );

  const modifyTattoo = useCallback(
    async (id: string, modifiedTattoo: TattooStructureWithoutId) => {
      try {
        dispatch(showLoadingActionCreator());
        const {
          data: { tattoo },
        } = await axios.patch<{ tattoo: TattooStructure }>(
          `/tattoos/${id}`,
          modifiedTattoo,
        );

        dispatch(hideLoadingActionCreator());

        toast.success("The tattoo has been modified succesfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        navigate("/");

        scrollTo(0, 0);

        return tattoo;
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error("Error modifying the tattoo", {
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
    },
    [dispatch, navigate],
  );

  return { getTattoos, deleteTattoo, addTattoo, getTattoo, modifyTattoo };
};

export default useTattoosApi;
