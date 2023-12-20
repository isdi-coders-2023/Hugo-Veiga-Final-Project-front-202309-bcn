import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import TattooForm from "../../components/TattooForm/TattooForm";
import useTattoosApi from "../../hooks/useTattoosApi";
import { TattooStructureWithoutId } from "../../store/features/tattoos/types";
import { useEffect } from "react";
import {
  loadTattooActionCreator,
  modifyTattooActionCreator,
} from "../../store/features/tattoos/tattoosSlice";
import ModifyTattooPageStyled from "./ModifyTattooPageStyled";

const ModifyTattooPage = (): React.ReactElement => {
  const { _id } = useParams();
  const { modifyTattoo, getTattoo } = useTattoosApi();
  const { tattoo } = useAppSelector((state) => state.tattoosState);
  const dispatch = useAppDispatch();

  const updateTattoo = async (modifiedTattoo: TattooStructureWithoutId) => {
    const updatedTattoo = await modifyTattoo(tattoo._id, modifiedTattoo);

    dispatch(modifyTattooActionCreator(updatedTattoo!));
  };
  useEffect(() => {
    (async () => {
      if (_id) {
        const tattoo = await getTattoo(_id);

        dispatch(loadTattooActionCreator(tattoo!));

        return tattoo;
      }
    })();
  }, [dispatch, getTattoo, _id]);

  return (
    <ModifyTattooPageStyled className="modifyTattoo-page">
      <h2 className="modifyTattoo-page__title">Modify tattoo</h2>
      <TattooForm onSubmit={updateTattoo} selectedTattoo={tattoo} />
    </ModifyTattooPageStyled>
  );
};

export default ModifyTattooPage;
