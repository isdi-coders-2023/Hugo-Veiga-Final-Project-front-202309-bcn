import TattooForm from "../../components/TattooForm/TattooForm";
import AddTattooPageStyled from "./AddTattooPageStyled";
import useTattoosApi from "../../hooks/useTattoosApi";

const AddTattooPage = (): React.ReactElement => {
  const { addTattoo } = useTattoosApi();

  return (
    <>
      <AddTattooPageStyled className="addTattoo-page">
        <h1 className="addTattoo-page__title">Add a new tattoo</h1>
        <TattooForm onSubmit={addTattoo} />
      </AddTattooPageStyled>
    </>
  );
};

export default AddTattooPage;
