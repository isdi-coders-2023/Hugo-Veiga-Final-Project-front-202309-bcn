import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import TattoosPage from "../../pages/TattoosPage/TattoosPage";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store/hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTattooPage from "../../pages/AddTattooPage/AddTattooPage";
import Footer from "../Footer/Footer";
import TattooDetailPage from "../../pages/TattooDetailPage/TattooDetailPage";
import ModifyTattooPage from "../../pages/ModifyTattooPage/ModifyTattooPage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      {uiState.isLoading && <Loading />}
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/tattoos" />} />
        <Route path="/tattoos" element={<TattoosPage />} />
        <Route path="/add-tattoo" element={<AddTattooPage />} />
        <Route path="/tattoo/:_id" element={<TattooDetailPage />} />
        <Route path="/modify-tattoo/:_id" element={<ModifyTattooPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
