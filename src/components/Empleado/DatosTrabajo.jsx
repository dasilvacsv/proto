import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useEmployeeStore from '@/store/empleadoStore.js'; 

const FormularioDatosTrabajo = ({ alCrearEmpleado }) => {
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
        {/* Manejar la Selección de Departamento para enviar al Cargo con una FK */}
        <Label htmlFor="cargo">Cargo</Label>
        <Input
          id="cargo"
          type="text"
          {...register('Id_cargos_id', { required: 'Este campo es requerido.' })}
        />
        {errors.Id_cargos_id && <p>{errors.Id_cargos_id.message}</p>}
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
          type="email"
          {...register('Jornada_e', { required: 'Este campo es requerido.' })}
        />
      </div>
      {errors.Jornada_e && <p>{errors.Jornada_e.message}</p>}

      <Button type="submit">Registrar</Button>
    </form>
  );
};

export default FormularioDatosTrabajo;
