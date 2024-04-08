import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import useEmployeeStore from "@/store/empleadoStore.js";

// Validation Schema
const schema = yup
  .object({
    Cedula_e: yup.string().required("Por favor, indica tu cédula."),
    Nombre1_e: yup.string().required("Por favor, indica tu primer nombre."),
    Apellido1_e: yup.string().required("Por favor, indica tu primer apellido."),
    Fecha_nac_e: yup
      .string()
      .required("Por favor, indica tu fecha de nacimiento"),
  })
  .required();

function FormularioDatosPrimordiales() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { registrarEmpleado } = useEmployeeStore((state) => ({
    registrarEmpleado: state.registrarEmpleado,
    clearErrors: state.clearErrors,
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
      navigate("/empleados2", { state: { id_empleado: user.id_empleado } });
    }
  };

  return (
    <div className="bg-slate-200 p-8 rounded-xl mb-4">
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div>
        <Label htmlFor="cedula">Cédula <span className="text-red-500">*</span></Label>
        <Input id="cedula" type="text" placeholder="V12345678" {...register("Cedula_e")} />
        {errors.Cedula_e?.message && <p>{errors.Cedula_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="nombre1">Primer Nombre <span className="text-red-500">*</span></Label>
        <Input id="nombre1" type="text" placeholder="Primer Nombre" {...register("Nombre1_e")} />
        {errors.Nombre1_e?.message && <p>{errors.Nombre1_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="nombre2">Segundo Nombre</Label>
        <Input id="nombre2" type="text" placeholder="Segundo Nombre" {...register("Nombre2_e")} />
      </div>
      <div>
        <Label htmlFor="apellido1">Primer Apellido <span className="text-red-500">*</span></Label>
        <Input
          id="apellido1"
          type="text"
          placeholder="Primer Apellido"
          {...register("Apellido1_e", { required: "Este campo es requerido." })}
        />
        {errors.Apellido1_e && <p>{errors.Apellido1_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="apellido2">Segundo Apellido</Label>
        <Input id="apellido2" type="text" placeholder="Segundo Apellido" {...register("Apellido2_e")} />
      </div>
      <div>
        <Label htmlFor="fecha_nac">Fecha de Nacimiento <span className="text-red-500">*</span></Label>
        <Input
          id="fecha_nac"
          type="date"
          {...register("Fecha_nac_e", { required: "Este campo es requerido." })}
        />
      </div>
      {errors.Fecha_nac_e && <p>{errors.Fecha_nac_e.message}</p>}

      <div>
        <Label htmlFor="sexo">
          Sexo <span className="text-red-500">*</span>
        </Label>
       {/*  <Input
          id="sexo"
          type="text"
          {...register("Sexo_e", { required: "Este campo es requerido." })}
        /> */}
        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 mb-1">
        <option className="text-gray-700" value="Seleccione su sexo">
            Seleccione su sexo
          </option>
          <option className="text-gray-700" value="Masculino">
            Masculino
          </option>
          <option className="text-gray-700" value="Femenino">
            Femenino
          </option>
        </select>
      </div>
      {errors.Sexo_e && <p>{errors.Sexo_e.message}</p>}

      <div className="flex justify-center py-3">
        <Button type="submit">Registrar</Button>
      </div>
    </form>
    </div>
  );
}

export default FormularioDatosPrimordiales;
