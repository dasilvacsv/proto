import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useEmployeeStore from '@/store/empleadoStore.js'; 
import useLocationStore from "@/store/locationStore";
import { useNavigate } from "react-router-dom";



const FormularioDatosTrabajo =  ({ idEmpleado }) => {
  const navigate = useNavigate();
  const { register, control, handleSubmit, setValue, formState: { errors } } = useForm();
  const { actualizarEmpleado } = useEmployeeStore(state => state);
  const { departamentos, cargos, cargarDepartamentos, cargarCargosPorDepartamentoId } = useLocationStore();

  useEffect(() => {
    cargarDepartamentos();
  }, []);

  const handleSelectChange = (name, value) => {
    setValue(name, value);
    if (name === "departamento") {
      cargarCargosPorDepartamentoId(value);
      setValue("cargo", "");
    }
  };

  const onSubmit = async (data) => {
    console.log(
      `Registrando datos de contacto para el empleado ID: ${idEmpleado}`,
      data
    );
    await actualizarEmpleado(idEmpleado, data);
    navigate("/empleados5", { state: { id_empleado: idEmpleado } });
  };
    
  return (
    <div className="bg-slate-200 p-8 rounded-xl mb-4">

    <form onSubmit={handleSubmit(onSubmit)}>
     
     <div>
        <Label htmlFor="departamento">Departamento</Label>
        <Controller
          name="departamento"
          control={control}
          render={({ field }) => (
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 mb-1" {...field} onChange={(e) => handleSelectChange("departamento", e.target.value)}>
              <option value="">Seleccione un Departamento</option>
              {departamentos.map((departamento) => (
                <option key={departamento.id_departamento} value={departamento.id_departamento}>
                  {departamento.nombre_dep ? departamento.nombre_dep.trim() : ''}
                </option>
              ))}
            </select>
          )}
        />
      </div>

      <div>
        <Label htmlFor="cargo">Cargo</Label>
        <Controller
          name="cargo"
          control={control}
          render={({ field }) => (
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 mb-1" {...field} onChange={(e) => handleSelectChange("cargo", e.target.value)}>
              <option value="">Seleccione un Cargo</option>
              {cargos.map((cargo) => (
                <option key={cargo.id_cargo} value={cargo.id_cargo}>
                  {cargo.nombre_car ? cargo.nombre_car.trim() : ''}
                </option>
              ))}
            </select>
          )}
        />
      </div>

      <div>
        <Label htmlFor="tipopersonal">Tipo de Personal</Label>
        <Input
          id="tipopersonal"
          type="text"
          {...register('Tipo_per_e', { required: 'Este campo es requerido.' })}
        />
        {errors.Tipo_per_e && <p>{errors.Tipo_per_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="jornada">Tipo de Jornada</Label>
        <Input
          id="jornada"
          type="text"
          {...register('Jornada_e', { required: 'Este campo es requerido.' })}
        />
      </div>
      {errors.Jornada_e && <p>{errors.Jornada_e.message}</p>}

      <Button type="submit">Registrar</Button>
    </form>
    </div>
  );
};

export default FormularioDatosTrabajo;
