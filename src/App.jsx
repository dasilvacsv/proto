import { Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import useAuthStore from './store/authStore'; 
import PaginaAcceso from "./pages/PaginaAcceso";
import PaginaRegistro from "./pages/PaginaRegistro";
import Tablero from "./pages/Tablero";
import NotFound from "./pages/NotFound";
import Pais from "./pages/GestionPais";
import GestionEmpleados from "./pages/GestionEmpleados";

function App() {
  const { checkAuth, isAuth } = useAuthStore(state => ({
    checkAuth: state.checkAuth,
    isAuth: state.isAuth
  }));

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    console.log("User is authenticated:", isAuth);
  }, [isAuth]);


  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/acceso" element={<PaginaAcceso />} />
      <Route path="/registro" element={<PaginaRegistro />} />
      <Route path="/tablero" element={<Tablero />} />
      <Route path="/pais" element={<Pais />} />
      <Route path="/empleados" element={<GestionEmpleados />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
