import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import useEmployeeStore from "@/store/empleadoStore.js";
import FormField from "./FormField";

const schema = yup
  .object({
    cedula_e: yup.string().required("Por favor, indique su cédula."),
    nombre1_e: yup.string().required("Por favor, indique su primer nombre."),
    apellido1_e: yup.string().required("Por favor, indique su primer apellido."),
    fecha_nac_e: yup
      .string()
      .required("Por favor, indique su fecha de nacimiento"),
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
  const { registrarEmpleado, errores } = useEmployeeStore((state) => ({
    registrarEmpleado: state.registrarEmpleado,
    clearErrors: state.clearErrors,
    errores: state.errores
  }));

  const onSubmit = async (data) => {
    const datosProcesados = {
      ...data,
      nombre2_e: data.nombre2_e || null,
      apellido2_e: data.apellido2_e || null,
    };
    console.log(datosProcesados);
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
      {errores && errores.message && <div className="font-semibold text-red-700 text-center">{errores.message}</div>}
        <FormField
          label="Cédula de Identidad"
          type="text"
          id="cedula_e"
          placeholder="V23547895"
          register={register}
          errors={errors}
        />
        <FormField
          label="Primer Nombre"
          type="text"
          id="nombre1_e"
          placeholder="Primer Nombre"
          register={register}
          errors={errors}
        />
        <FormField
          label="Segundo Nombre"
          type="text"
          id="nombre2_e"
          placeholder="Segundo Nombre"
          register={register}
          errors={errors}
        />
        <FormField
          label="Primer Apellido"
          id="apellido1_e"
          type="text"
          placeholder="Primer Apellido"
          register={register}
          errors={errors}
        />
        <FormField
          label="Segundo Apellido"
          id="apellido2_e"
          type="text"
          placeholder="Segundo Apellido"
          register={register}
          errors={errors}
        />
        <FormField
          label="Fecha de Nacimiento"
          id="fecha_nac_e"
          type="date"
          register={register}
          errors={errors}
        />
        <div>
          <Label htmlFor="sexo">
            Sexo <span className="text-red-500">*</span>
          </Label>
          <select
            {...register("sexo_e")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 mb-1"
          >
            <option className="text-gray-700" value="">
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

        <div className="flex justify-center py-3">
          <Button type="submit">Registrar</Button>
        </div>
      </form>
    </div>
  );
}

export default FormularioDatosPrimordiales;
