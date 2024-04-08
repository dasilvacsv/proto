import LayoutAdmin from "@/layouts/LayoutAdmin";
import { useLocation } from "react-router-dom";
import FormularioDatosUniformes from "@/components/Empleado/DatosUniformes";

function DatosUniformes() {
  const location = useLocation();
  const { id_empleado } = location.state || {}; // Usa un objeto vacío como valor predeterminado para prevenir errores

 
  return (
    <>
      <LayoutAdmin>
        <div className="py-20">
          <FormularioDatosUniformes idEmpleado={id_empleado} />
        </div>
      </LayoutAdmin>
    </>
  );
}

export default DatosUniformes;
