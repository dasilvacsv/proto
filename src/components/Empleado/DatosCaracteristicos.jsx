import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useEmployeeStore from '@/store/empleadoStore.js'; 

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
      <div>
        <Label htmlFor="geoubicacion">Ubicación Geográfica</Label>
        <Input
          id="geoubicacion"
          type="text"
          {...register('Geo_ubicacion', { required: 'Este campo es requerido.' })}
        />
        {errors.Geo_ubicacion && <p>{errors.Geo_ubicacion.message}</p>}
      </div>
      <div>
        <Label htmlFor="regfoto">Registro Fotográfico del Empleado</Label>
        <Input
          id="regfoto"
          type="text"
          {...register('Reg_fotog_e', { required: 'Este campo es requerido.' })}
        />
        {errors.Reg_fotog_e && <p>{errors.Reg_fotog_e.message}</p>}
      </div>
      <div>
        {/* Link a Registro Biométrico */}
        <Label htmlFor="regbio">Registro Biométrico</Label>
        <Input
          id="regbio"
          type="text"
          {...register('Reg_biometrico_e', { required: 'Este campo es requerido.' })}
        />
      </div>
      {errors.Reg_biometrico_e && <p>{errors.Reg_biometrico_e.message}</p>}

      <Button type="submit">Registrar</Button>
    </form>
    </div>
  );
};

export default FormularioDatosCaracteristicos;


















