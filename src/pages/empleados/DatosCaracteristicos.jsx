import LayoutAdmin from "@/layouts/LayoutAdmin";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import FormularioDatosCaracteristicos from "@/components/Empleado/DatosCaracteristicos";

function DatosCaracteristicos() {
  const location = useLocation();
  const { id_empleado } = location.state || {}; // Usa un objeto vacío como valor predeterminado para prevenir errores

  return (
    <>
      <LayoutAdmin>
        <div className="py-20">
          <FormularioDatosCaracteristicos idEmpleado={id_empleado} />
        </div>
      </LayoutAdmin>
    </>
  );
}

export default DatosCaracteristicos;
