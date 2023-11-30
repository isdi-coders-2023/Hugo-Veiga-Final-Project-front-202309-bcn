import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import TattoosPage from "../../pages/TattoosPage";

const App = (): React.ReactElement => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/tattoos" />} />
        <Route path="/tattoos" element={<TattoosPage />} />
      </Routes>
    </div>
  );
};

export default App;
