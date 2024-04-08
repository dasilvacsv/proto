import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";3
import useEmployeeStore from "@/store/empleadoStore.js";
import useLocationStore from "@/store/locationStore";
import { useNavigate } from "react-router-dom";

const FormularioDatosContacto = ({ idEmpleado }) => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { actualizarEmpleado } = useEmployeeStore((state) => ({
    actualizarEmpleado: state.actualizarEmpleado,
  }));
  const {
    paises,
    estados,
    municipios,
    parroquias,
    cargarPaises,
    cargarEstadosPorPaisId,
    cargarMunicipiosPorEstadoId,
    cargarParroquiasPorMunicipioId,
  } = useLocationStore();

  // Inicialización de estados locales
  useEffect(() => {
    cargarPaises();
  }, []);

  // Manejo de cambio de selección
  const handleSelectChange = (name, value) => {
    setValue(name, value);
    switch (name) {
      case "pais":
        cargarEstadosPorPaisId(value);
        setValue("estado", "");
        setValue("municipio", "");
        setValue("parroquia", "");
        break;
      case "estado":
        cargarMunicipiosPorEstadoId(value);
        setValue("municipio", "");
        setValue("parroquia", "");
        break;
      case "municipio":
        cargarParroquiasPorMunicipioId(value);
        setValue("parroquia", "");
        break;
      default:
        break;
    }
  };

  const onSubmit = async (data) => {
    await actualizarEmpleado(idEmpleado, data);
    console.log(`Datos registrados para el empleado ID: ${idEmpleado}`, data);
    navigate("/empleados3", { state: { id_empleado: idEmpleado } });
  };

  return (
    <div className="bg-slate-200 p-8 rounded-xl mb-4">

    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Campos de entrada */}

      <div>
        <Label htmlFor="telef_fijo">Teléfono Fijo</Label>
        <Input
          id="telef_fijo"
          type="text"
          {...register("Telef_fijo_e", {
            required: "Este campo es requerido.",
          })}
        />
        {errors.Telef_fijo_e && <p>{errors.Telef_fijo_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="telef_movil">Teléfono Móvil</Label>
        <Input
          id="telef_movil"
          type="text"
          {...register("Telef_movil_e", {
            required: "Este campo es requerido.",
          })}
        />
        {errors.Telef_movil_e && <p>{errors.Telef_movil_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="correo">Correo Electrónico</Label>
        <Input
          id="correo"
          type="email"
          {...register("Correo_e", { required: "Este campo es requerido." })}
        />
      </div>
      {errors.Correo_e && <p>{errors.Correo_e.message}</p>}
      <div>
        <Label htmlFor="Dirección">Dirección</Label>
        <Input
          id="Dirección"
          type="text"
          {...register("Direccion_e", { required: "Este campo es requerido." })}
        />
      </div>
      {errors.Direccion_e && <p>{errors.Direccion_e.message}</p>}

      <div>
        <Label htmlFor="pais">País</Label>
        <Controller
          name="pais"
          control={control}
          render={({ field }) => (
            <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 mb-1 "
              {...field}
              onChange={(e) => handleSelectChange("pais", e.target.value)}
            >
              <option value="">Seleccione un País</option>
              {paises.map((pais) => (
                <option key={pais.id_pais} value={pais.id_pais}>
                  {pais.nombre_pais.trim()}
                </option>
              ))}
            </select>
          )}
        />
      </div>

      <div>
        <Label htmlFor="estado">Estado</Label>
        <Controller
          name="estado"
          control={control}
          render={({ field }) => (
            <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 mb-1"
              {...field}
              onChange={(e) => handleSelectChange("estado", e.target.value)}
            >
              <option value="">Seleccione un Estado</option>
              {estados.map((estado) => (
                <option key={estado.id_estado} value={estado.id_estado}>
                  {estado.nombre_es.trim()}
                </option>
              ))}
            </select>
          )}
        />
      </div>
      <div>
        <Label htmlFor="municipio">Municipio</Label>
        <Controller
          name="municipio"
          control={control}
          render={({ field }) => (
            <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 mb-1"
              {...field}
              onChange={(e) => handleSelectChange("municipio", e.target.value)}
            >
              <option value="">Seleccione un Municipio</option>
              {municipios.map((municipio) => (
                <option key={municipio.id_municipio} value={municipio.id_municipio}>
                  {municipio.nombre_mu.trim()}
                </option>
              ))}
            </select>
          )}
        />
      </div>
      <div className="mb-2">
        <Label htmlFor="parroquia">Parroquia</Label>
        <Controller
          name="parroquia"
          control={control}
          render={({ field }) => (
            <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 mb-1"
              {...field}
              onChange={(e) => handleSelectChange("parroquia", e.target.value)}
            >
              <option value="">Seleccione una Parroquia</option>
              {parroquias.map((parroquia) => (
                <option key={parroquia.id_parroquia} value={parroquia.id_parroquia}>
                  {parroquia.nombre_pa.trim()}
                </option>
              ))}
            </select>
          )}
        />
      </div>

      <div className="flex justify-center sm:justify-normal">
          
      <Button type="submit">Registrar</Button>
      </div>
    </form>
    </div>
  );
};

export default FormularioDatosContacto;
