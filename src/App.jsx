import { Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import useAuthStore from './store/authStore'; 
import PaginaAcceso from "./pages/PaginaAcceso";
import PaginaRegistro from "./pages/PaginaRegistro";
import Tablero from "./pages/Tablero";
import NotFound from "./pages/NotFound";
import Pais from "./pages/GestionPais";
import DatosEmpleado from "./pages/empleados/DatosEmpleado";
import DatosPrimordiales from "./pages/empleados/DatosPrimordiales";
import DatosUniformes from "./pages/empleados/DatosUniformes";
import DatosTrabajo from "./pages/empleados/DatosTrabajo";
import DatosCaracteristicos from "./pages/empleados/DatosCaracteristicos";
import GestionUsuariosBio from "./pages/biometrico/GestionUsuariosBio";

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
      {/* Empleados routes */}
      <Route path="/empleados" element={<DatosPrimordiales />} />
      <Route path="/empleados2" element={<DatosEmpleado />} />
      <Route path="/empleados3" element={<DatosUniformes />} />
      <Route path="/empleados4" element={<DatosTrabajo />} />
      <Route path="/empleados5" element={<DatosCaracteristicos />} />
      {/* Biometrico routes */}
      <Route path="/biometrico" element={<GestionUsuariosBio />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
