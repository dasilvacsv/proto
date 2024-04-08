import LayoutAdmin from "@/layouts/LayoutAdmin";
import { useLocation } from "react-router-dom";
import FormularioDatosTrabajo from "@/components/Empleado/DatosTrabajo";

function DatosTrabajo() {
  const location = useLocation();
  const { id_empleado } = location.state || {}; 

  return (
    <>
      <LayoutAdmin>
        <div className="py-20">
          <FormularioDatosTrabajo idEmpleado={id_empleado} />
        </div>

      </LayoutAdmin>
    </>
  );
}

export default DatosTrabajo;
