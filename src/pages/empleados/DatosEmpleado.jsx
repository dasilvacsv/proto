import LayoutAdmin from "@/layouts/LayoutAdmin";
import { useLocation } from "react-router-dom";
import FormularioDatosContacto from "@/components/Empleado/DatosContactoForm";

function DatosEmpleado() {
  const location = useLocation();
  const { id_empleado } = location.state || {}; // Usa un objeto vacío como valor predeterminado para prevenir errores


  return (
    <>
      <LayoutAdmin>
        <h1>ID del Empleado: {id_empleado}</h1>
        <FormularioDatosContacto idEmpleado={id_empleado} />
      </LayoutAdmin>
    </>
  );
}

export default DatosEmpleado;
