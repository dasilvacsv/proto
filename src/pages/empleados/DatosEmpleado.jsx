import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthStore from "@/store/authStore";
import React, { useEffect } from "react";
import FormularioDatosPrimordiales from "@/components/Empleado/DatosPrimordialesForm";
import FormularioDatosContacto from "@/components/Empleado/DatosContactoForm";
import FormularioDatosUniformes from "@/components/Empleado/DatosUniformes";
import FormularioDatosTrabajo from "@/components/Empleado/DatosTrabajo";
import FormularioDatosCaracteristicos from "@/components/Empleado/DatosCaracteristicos";

function DatosEmpleado() {
  const location = useLocation();
  const { id_empleado } = location.state || {}; // Usa un objeto vacío como valor predeterminado para prevenir errores

  useEffect(() => {
    console.log("ID del Empleado:", id_empleado); // Opcional: para verificar que recibes el id correctamente
  }, [id_empleado]);
  return (
    <>
      <LayoutAdmin>
        <h1>ID del Empleado: {id_empleado}</h1>
        <FormularioDatosContacto idEmpleado={id_empleado} />
        <div className="py-20">
          <FormularioDatosUniformes idEmpleado={id_empleado} />
        </div>
        <div className="py-20">
          <FormularioDatosTrabajo idEmpleado={id_empleado} />
        </div>
        <div className="py-20">
          <FormularioDatosCaracteristicos idEmpleado={id_empleado} />
        </div>
      </LayoutAdmin>
    </>
  );
}

export default DatosEmpleado;
