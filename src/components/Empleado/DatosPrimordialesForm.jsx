import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useEmployeeStore from '@/store/empleadoStore.js'; 

const FormularioDatosPrimordiales = ({ alCrearEmpleado }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const registrarEmpleado = useEmployeeStore((state) => state.registrarEmpleado);
  
  const onSubmit = async (data) => {
    const nuevoEmpleado = await registrarEmpleado(data);
    if (nuevoEmpleado && nuevoEmpleado.Id_empleado) {
      alCrearEmpleado(nuevoEmpleado.Id_empleado);
    } else {
      // Manejo de errores, puedes mostrar un mensaje al usuario aquí.
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="cedula">Cédula</Label>
        <Input
          id="cedula"
          type="text"
          {...register('Cedula_e', { required: 'Este campo es requerido.' })}
        />
        {errors.Cedula_e && <p>{errors.Cedula_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="nombre1">Primer Nombre</Label>
        <Input
          id="nombre1"
          type="text"
          {...register('Nombre1_e', { required: 'Este campo es requerido.' })}
        />
        {errors.Nombre1_e && <p>{errors.Nombre1_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="nombre2">Segundo Nombre</Label>
        <Input
          id="nombre2"
          type="text"
          {...register('Nombre2_e', { required: 'Este campo es requerido.' })}
        />
      </div>
      <div>
        <Label htmlFor="apellido1">Primer Apellido</Label>
        <Input
          id="apellido1"
          type="text"
          {...register('Apellido1_e', { required: 'Este campo es requerido.' })}
        />
      </div>
      <div>
        <Label htmlFor="apellido2">Segundo Apellido</Label>
        <Input
          id="apellido2"
          type="text"
          {...register('Apellido2_e', { required: 'Este campo es requerido.' })}
        />
      </div>
      <div>
        <Label htmlFor="fecha_nac">Fecha de Nacimiento</Label>
        <Input
          id="fecha_nac"
          type="date"
          {...register('Fecha_nac_e', { required: 'Este campo es requerido.' })}
        />
      </div>
      <div>
        <Label htmlFor="sexo">Sexo</Label>
        <Input
          id="sexo"
          type="text"
          {...register('Sexo_e', { required: 'Este campo es requerido.' })}
        />
      </div>
      <Button type="submit">Registrar</Button>
    </form>
  );
};

export default FormularioDatosPrimordiales;

