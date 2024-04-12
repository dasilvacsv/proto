import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import useEmployeeStore from '@/store/empleadoStore.js';
import useBiometricoStore from '@/store/biometricoStore';
import { useNavigate } from 'react-router-dom';
import FormField from '../Empleado/FormField';
import { Input } from '../ui/input';

const UsuarioBioForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const actualizarEmpleado = useEmployeeStore((state) => state.actualizarEmpleado);
  const selectedEmployee = useEmployeeStore((state) => state.selectedEmployee); 
  const createZKTecoUser = useBiometricoStore((state) => state.createZKTecoUser);
  const [nextUserId, setNextUserId] = useState(200); 
  const [cedula, setCedula] = useState(''); 
  const { fetchEmpleadoPorCedula } = useEmployeeStore();
  const [submitting, setSubmitting] = useState(false); 

  const handleSearch = async () => {
    if (!cedula) {
      console.error('Please enter a cedula');
      return;
    }
    await fetchEmpleadoPorCedula(cedula);
  }

  const onSubmit = async (data) => {
    if (!selectedEmployee) {
      console.error('No employee selected');
      return;
    }

    const { nombre1_e, id, cedula_e } = selectedEmployee;
    const cleanCedula = cedula_e.replace(/\D/g,''); 
    const formData = {
      uid: nextUserId,
      userId: nextUserId.toString(),
      name: nombre1_e,
      password: "111", 
      role: 0, 
      cardno: cleanCedula,
    };

    console.log('Registrando datos de contacto para el empleado:', formData);

    try {
      await createZKTecoUser(formData);
      console.log('Usuario de ZKTeco creado exitosamente');
    } catch (error) {
      console.error('Error al crear el usuario de ZKTeco:', error);
    }
  };

  return (
    <div className="bg-slate-200 p-8 rounded-xl mb-4">
      <div>
        <Input
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          placeholder="Enter cedula here"
        />
        <Button onClick={handleSearch}>Buscar</Button>
        {selectedEmployee && (
          <div className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 mb-1'>
            {selectedEmployee.nombre1_e.substring(0, 20)} {selectedEmployee.nombre2_e.substring(0, 20)} {selectedEmployee.apellido1_e.substring(0, 20)} {selectedEmployee.apellido2_e.substring(0, 20)}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Talla de Camisa"
          type="text"
          id="camisa_e"
          register={register}
          errors={errors}
        />
        <FormField
          label="Talla de Pantalón"
          type="text"
          id="pantalon_e"
          register={register}
          errors={errors}
        />
        <FormField
          label="Talla de Botas"
          type="text"
          id="botas_e"
          register={register}
          errors={errors}
        />
        {/* Hidden input to store cedula value */}
        <input type="hidden" {...register("cardno")} value={cedula} />
        <Button type="submit">Registrar</Button>
      </form>
    </div>
  );
};

export default UsuarioBioForm;
