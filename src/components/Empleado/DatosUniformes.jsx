import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import useEmployeeStore from "@/store/empleadoStore.js";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";


const FormularioDatosUniformes = ({ idEmpleado }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const actualizarEmpleado = useEmployeeStore(
    (state) => state.actualizarEmpleado
  );

  const onSubmit = async (data) => {
    console.log(
      `Registrando datos de contacto para el empleado ID: ${idEmpleado}`,
      data
    );
    await actualizarEmpleado(idEmpleado, data);
    navigate('/empleados4', { state: { id_empleado: idEmpleado } });

  };

  return (
    <div className="bg-slate-200 p-8 rounded-xl mb-4">

    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Talla de Camisa"
        type="text"
        id="camisa_e"
        register={register}
        errors={errors}
      />
      <FormField
        label="Talla de Pantalón"
        type="text"
        id="pantalon_e"
        register={register}
        errors={errors}
      />
      <FormField
        label="Talla de Botas"
        type="text"
        id="botas_e"
        register={register}
        errors={errors}
      />

      <Button type="submit">Registrar</Button>
    </form>
    </div>
  );
};

export default FormularioDatosUniformes;
