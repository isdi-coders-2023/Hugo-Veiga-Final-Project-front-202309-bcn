import TattooForm from "../../components/TattooForm/TattooForm";
import AddTattooPageStyled from "./AddTattooPageStyled";
import useTattoosApi from "../../hooks/useTattoosApi";
import { useAppDispatch } from "../../store/hooks";
import { addTattooActionCreator } from "../../store/features/tattoos/tattoosSlice";
import { TattooStructureWithoutId } from "../../store/features/tattoos/types";

const AddTattooPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { addTattoo } = useTattoosApi();

  const formOnSubmitAction = async (tattoo: TattooStructureWithoutId) => {
    const newTattooForm = await addTattoo(tattoo);

    if (newTattooForm) {
      dispatch(addTattooActionCreator(newTattooForm));
    }
  };

  return (
    <AddTattooPageStyled className="addTattoo-page">
      <h1 className="addTattoo-page__title">Add a new tattoo</h1>
      <TattooForm onSubmit={formOnSubmitAction} />
    </AddTattooPageStyled>
  );
};

export default AddTattooPage;
