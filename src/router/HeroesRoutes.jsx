import { Navigate, Route, Routes } from "react-router-dom";

import { VestPage, UniPage, CaractPage, SearchPage, EdiPage } from "../pages";
import { Navbar } from "../components";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="caracteristicas" element={<CaractPage />} />
          <Route path="vestimentas" element={<VestPage />} />
          <Route path="edificaciones" element={<EdiPage />} />

          <Route path="busqueda" element={<SearchPage />} />

          <Route path="bus/:id" element={<UniPage />} />

          <Route path="/" element={<Navigate to="/caracteristicas" />} />
        </Routes>
      </div>
    </>
  );
};
