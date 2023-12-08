import { useNavigate } from "react-router-dom";
import TattooForm from "../../components/TattooForm/TattooForm";
import { useAppDispatch } from "../../store/hooks";
import AddTattooPageStyled from "./AddTattooPageStyled";
import useTattoosApi from "../../hooks/useTattoosApi";
import { TattooStructureWithoutId } from "../../store/features/tattoos/types";
import { addTattooActionCreator } from "../../store/features/tattoos/tattoosSlice";

const AddTattooPage = (): React.ReactElement => {
  const { addTattoo } = useTattoosApi();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (tattooData: TattooStructureWithoutId) => {
    const newTattoo = await addTattoo(tattooData);

    if (newTattoo) {
      dispatch(addTattooActionCreator(newTattoo));
    }

    navigate("/tattoos");
  };
  return (
    <>
      <AddTattooPageStyled className="addTattoo-page">
        <h1 className="addTattoo-page__title">Add a new tattoo</h1>
        <TattooForm onSubmit={onSubmit} />
      </AddTattooPageStyled>
    </>
  );
};

export default AddTattooPage;
