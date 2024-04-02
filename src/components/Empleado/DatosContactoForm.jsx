import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useEmployeeStore from '@/store/empleadoStore.js'; 

const FormularioDatosContacto = ({ alCrearEmpleado }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const registrarEmpleado = useEmployeeStore((state) => state.registrarEmpleado);
  
  const onSubmit = async (data) => {
    const nuevoEmpleado = registrarEmpleado(data);
    if (nuevoEmpleado && nuevoEmpleado.Id_empleado) {
      alCrearEmpleado(nuevoEmpleado.Id_empleado);
    } else {
      // Manejo de errores, puedes mostrar un mensaje al usuario aquí.
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="telef_fijo">Teléfono Fijo</Label>
        <Input
          id="telef_fijo"
          type="text"
          {...register('Telef_fijo_e', { required: 'Este campo es requerido.' })}
        />
        {errors.Telef_fijo_e && <p>{errors.Telef_fijo_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="telef_movil">Teléfono Móvil</Label>
        <Input
          id="telef_movil"
          type="text"
          {...register('Telef_movil_e', { required: 'Este campo es requerido.' })}
        />
        {errors.Telef_movil_e && <p>{errors.Telef_movil_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="correo">Correo Electrónico</Label>
        <Input
          id="correo"
          type="email"
          {...register('Correo_e', { required: 'Este campo es requerido.' })}
        />
      </div>
      {errors.Correo_e && <p>{errors.Correo_e.message}</p>}
      {/* Datos de Parroquia y Direccion con FK, posiblemente Select */}
      <div>
        <Label htmlFor="Dirección">Dirección</Label>
        <Input
          id="Dirección"
          type="text"
          {...register('Direccion_e', { required: 'Este campo es requerido.' })}
        />
      </div>
      {errors.Direccion_e && <p>{errors.Direccion_e.message}</p>}

      <Button type="submit">Registrar</Button>
    </form>
  );
};

export default FormularioDatosContacto;

