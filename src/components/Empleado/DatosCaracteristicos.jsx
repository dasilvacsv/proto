import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useEmployeeStore from '@/store/empleadoStore.js'; 
import FormField from './FormField';

const FormularioDatosCaracteristicos = ({ idEmpleado }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const actualizarEmpleado = useEmployeeStore(
      (state) => state.actualizarEmpleado
    );
  
    const onSubmit = async (data) => {
      console.log(
        `Registrando datos de contacto para el empleado ID: ${idEmpleado}`,
        data
      );
      await actualizarEmpleado(idEmpleado, data);
    };

  return (
    <div className="bg-slate-200 p-8 rounded-xl mb-4">

    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Ubicación Geográfica"
        type="text"
        id="geo_ubicacion"
        register={register}
        errors={errors}
      />
      <FormField
        label="Registro Fotográfico del Empleado"
        type="text"
        id="reg_fotog_e"
        register={register}
        errors={errors}
      />
      <FormField
        label="Registro Biométrico"
        type="text"
        id="reg_biometrico_e"
        register={register}
        errors={errors}
      />
      
      <Button type="submit">Registrar</Button>
    </form>
    </div>
  );
};

export default FormularioDatosCaracteristicos;


















