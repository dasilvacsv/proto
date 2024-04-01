import { Route, Routes } from "react-router-dom";
import PaginaAcceso from "./pages/PaginaAcceso";
import PaginaRegistro from "./pages/PaginaRegistro";
import Tablero from "./pages/Tablero";
import NotFound from "./pages/NotFound";
import Pais from "./pages/GestionPais";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/acceso" element={<PaginaAcceso />} />
      <Route path="/registro" element={<PaginaRegistro />} />
      <Route path="/tablero" element={<Tablero />} />
      <Route path="/pais" element={<Pais />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
