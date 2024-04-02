import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useEmployeeStore from '@/store/empleadoStore.js'; 

const FormularioDatosUniformes = ({ alCrearEmpleado }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const actualizarEmpleado = useEmployeeStore((state) => state.registrarEmpleado);
  
  const onSubmit = async (data) => {
    const nuevoEmpleado = actualizarEmpleado(data);
    if (nuevoEmpleado && nuevoEmpleado.Id_empleado) {
      alCrearEmpleado(nuevoEmpleado.Id_empleado);
    } else {
      // Manejo de errores, puedes mostrar un mensaje al usuario aquí.
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="pantalon">Talla de Pantalón</Label>
        <Input
          id="pantalon"
          type="text"
          {...register('Pantalon_e', { required: 'Este campo es requerido.' })}
        />
        {errors.Pantalon_e && <p>{errors.Pantalon_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="camisa">Talla de Camisa</Label>
        <Input
          id="camisa"
          type="text"
          {...register('Camisa_e', { required: 'Este campo es requerido.' })}
        />
        {errors.Camisa_e && <p>{errors.Camisa_e.message}</p>}
      </div>
      <div>
        <Label htmlFor="botas">Talla de Botas</Label>
        <Input
          id="botas"
          type="email"
          {...register('Botas_e', { required: 'Este campo es requerido.' })}
        />
      </div>
      {errors.Botas_e && <p>{errors.Botas_e.message}</p>}
      {/* Datos de Parroquia y Direccion con FK, posiblemente Select */}

      <Button type="submit">Registrar</Button>
    </form>
  );
};

export default FormularioDatosUniformes;
