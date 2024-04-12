import { Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import useAuthStore from './store/authStore'; 
import PaginaAcceso from "./pages/PaginaAcceso";
import PaginaRegistro from "./pages/PaginaRegistro";
import Tablero from "./pages/Tablero";
import NotFound from "./pages/NotFound";
import DatosEmpleado from "./pages/empleados/DatosEmpleado";
import DatosPrimordiales from "./pages/empleados/DatosPrimordiales";
import DatosUniformes from "./pages/empleados/DatosUniformes";
import DatosTrabajo from "./pages/empleados/DatosTrabajo";
import DatosCaracteristicos from "./pages/empleados/DatosCaracteristicos";
import GestionUsuariosBio from "./pages/biometrico/GestionUsuariosBio";
import GestionAsistenciaBio from "./pages/biometrico/GestionAsistenciaBio"
import BorrarAsistenciaBio from "./pages/biometrico/BorrarAsistenciaBio";
import CreacionUsuariosBio from "./pages/biometrico/CreacionUsuariosBio";
import PaisCrud from "./pages/ubicacion/PaisCRUD";
import EstadoCrud from "./pages/ubicacion/EstadoCRUD";
import axios from './api/axios'; 

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
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
      {/* Empleados routes */}
      <Route path="/empleados" element={<DatosPrimordiales />} />
      <Route path="/empleados2" element={<DatosEmpleado />} />
      <Route path="/empleados3" element={<DatosUniformes />} />
      <Route path="/empleados4" element={<DatosTrabajo />} />
      <Route path="/empleados5" element={<DatosCaracteristicos />} />
      {/* Ubicacion Routes */}
      <Route path="/pais" element={<PaisCrud />} />
      <Route path="/estado" element={<EstadoCrud /> } />
      {/* Biometrico routes */}
      <Route path="/bio/usuarios" element={<GestionUsuariosBio />} />
      <Route path="/bio/asistencia" element={<GestionAsistenciaBio />} />
      <Route path="/bio/borrarasis" element={<BorrarAsistenciaBio />} />
      <Route path="/bio/creacion" element={<CreacionUsuariosBio />} />



      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
