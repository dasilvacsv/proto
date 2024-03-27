import { Route, Routes } from "react-router-dom";
import PaginaAcceso from "./pages/PaginaAcceso";
import PaginaRegistro from "./pages/PaginaRegistro";
import Tablero from "./pages/Tablero";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/acceso" element={<PaginaAcceso />} />
      <Route path="/registro" element={<PaginaRegistro />} />
    | <Route path="/tablero" element={<Tablero />} />
    </Routes>
  )
}

export default App