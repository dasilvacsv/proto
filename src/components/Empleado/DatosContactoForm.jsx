import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"; 3
import useEmployeeStore from "@/store/empleadoStore.js";
import useLocationStore from "@/store/locationStore";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";

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
    const {pais, estado, municipio, parroquia, ...datosEnviar} = data
    console.log("Datos procesados para enviar:", datosEnviar);
    const resultado = await actualizarEmpleado(idEmpleado, datosEnviar);
    if (resultado) {
      console.log("Empleado actualizado con éxito:", resultado);
      navigate("/empleados3", { state: { id_empleado: idEmpleado } });
    } else {
      console.error("Error al actualizar el empleado:", errores);
    }
  };

  return (
    <div className="bg-slate-200 p-8 rounded-xl mb-4">

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campos de entrada */}
        <FormField
          label="Teléfono Fijo"
          type="text"
          id="telef_fijo_e"
          placeholder="0282-1234567"
          register={register}
          errors={errors}
        />
        <FormField
          label="Teléfono Móvil"
          id="telef_movil_e"
          type="text"
          placeholder="0412-1234567"
          register={register}
          errors={errors}
        />
        <FormField
          label="Correo Electrónico"
          id="correo_e"
          type="email"
          placeholder="ejemplo@gmail.com"
          register={register}
          errors={errors}
        />
        <FormField
          label="Dirección"
          id="direccion_e"
          placeholder="Calle 123, Casa 45"
          register={register}
          errors={errors}
        />
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
            name="id_parroquia_id"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 mb-1"
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
