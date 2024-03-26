import { Route, Routes } from "react-router-dom";
import PaginaAcceso from "./pages/PaginaAcceso";
import PaginaRegistro from "./pages/PaginaRegistro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/acceso" element={<PaginaAcceso />} />
      <Route path="/registro" element={<PaginaRegistro />} />
    </Routes>
  )
}

export default App