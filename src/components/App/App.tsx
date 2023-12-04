import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import TattoosPage from "../../pages/TattoosPage/TattoosPage";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/tattoos" />} />
        <Route path="/tattoos" element={<TattoosPage />} />
      </Routes>
    </>
  );
};

export default App;
