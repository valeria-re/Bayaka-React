import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages";
import { HeroesRoutes } from "./HeroesRoutes";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
