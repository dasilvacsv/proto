import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthStore from "@/store/authStore";
import React, { useEffect } from "react";
import FormularioDatosPrimordiales from "@/components/Empleado/DatosPrimordialesForm";
import FormularioDatosContacto from "@/components/Empleado/DatosContactoForm";
import FormularioDatosUniformes from "@/components/Empleado/DatosUniformes";
import FormularioDatosTrabajo from "@/components/Empleado/DatosTrabajo";
import FormularioDatosCaracteristicos from "@/components/Empleado/DatosCaracteristicos";

function GestionEmpleados() {
  return (
    <>
      <LayoutAdmin>
        <FormularioDatosPrimordiales />
        <div className="py-20">
          <FormularioDatosContacto />
        </div>

        <div className="py-20">
          <FormularioDatosUniformes />
        </div>
        
        <div className="py-20">
          <FormularioDatosTrabajo />
        </div>
        
        <div className="py-20">
          <FormularioDatosCaracteristicos />
        </div>
      </LayoutAdmin>
    </>
  );
}

export default GestionEmpleados;
