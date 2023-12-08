import TattooForm from "../../components/TattooForm/TattooForm";
import AddTattooPageStyled from "./AddTattooPageStyled";

const AddTattooPage = (): React.ReactElement => {
  return (
    <>
      <AddTattooPageStyled className="addTattoo-page">
        <h1 className="addTattoo-page__title">Add a new tattoo</h1>
        <TattooForm />
      </AddTattooPageStyled>
    </>
  );
};

export default AddTattooPage;
