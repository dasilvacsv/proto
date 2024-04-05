import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import useEmployeeStore from "@/store/empleadoStore.js";

function FormularioDatosPrimordiales () {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const { registrarEmpleado } = useEmployeeStore(state => ({
    registrarEmpleado: state.registrarEmpleado,
    clearErrors: state.clearErrors
  }));

  const onSubmit = async (data) => {
    const datosProcesados = {
      ...data,
      Nombre2_e: data.Nombre2_e || null,
      Apellido2_e: data.Apellido2_e || null,
    };
    const user = await registrarEmpleado(datosProcesados);
    if (user != null) {
      console.log("Empleado creado:", user);
      reset();
      navigate('/empleados2', { state: { id_empleado: user.id_empleado } });

    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="cedula">Cédula</Label>
        <Input
          id="cedula"
          type="text"
          {...register("Cedula_e", { required: "Este campo es requerido." })}
        />
        {errors.Cedula_e && <p>{errors.Cedula_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="nombre1">Primer Nombre</Label>
        <Input
          id="nombre1"
          type="text"
          {...register("Nombre1_e", { required: "Este campo es requerido." })}
        />
        {errors.Nombre1_e && <p>{errors.Nombre1_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="nombre2">Segundo Nombre</Label>
        <Input id="nombre2" type="text" {...register("Nombre2_e")} />
      </div>
      <div>
        <Label htmlFor="apellido1">Primer Apellido</Label>
        <Input
          id="apellido1"
          type="text"
          {...register("Apellido1_e", { required: "Este campo es requerido." })}
        />
        {errors.Apellido1_e && <p>{errors.Apellido1_e.message}</p>}

      </div>
      <div>
        <Label htmlFor="apellido2">Segundo Apellido</Label>
        <Input id="apellido2" type="text" {...register("Apellido2_e")} />
      </div>
      <div>
        <Label htmlFor="fecha_nac">Fecha de Nacimiento</Label>
        <Input
          id="fecha_nac"
          type="date"
          {...register("Fecha_nac_e", { required: "Este campo es requerido." })}
        />
      </div>
      {errors.Fecha_nac_e && <p>{errors.Fecha_nac_e.message}</p>}

      <div>
        <Label htmlFor="sexo">Sexo</Label>
        <Input
          id="sexo"
          type="text"
          {...register("Sexo_e", { required: "Este campo es requerido." })}
        />
      </div>
      {errors.Sexo_e && <p>{errors.Sexo_e.message}</p>}

      <div className="py-3 justify-center items-center flex">
      <Button type="submit">Registrar</Button>
      </div>
    </form>
  );
};

export default FormularioDatosPrimordiales;
