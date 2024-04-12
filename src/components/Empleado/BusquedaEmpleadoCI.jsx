import React, { useState } from 'react';
import useEmployeeStore from '@/store/empleadoStore';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const BusquedaEmpleadoCI = ({ onSearch }) => {
  const [cedula, setCedula] = useState('');
  const { fetchEmpleadoPorCedula, empleado } = useEmployeeStore();

  const handleSearch = async () => {
    await fetchEmpleadoPorCedula(cedula);
    onSearch(empleado); 
  };

  return (
    <div>
      <Input
        value={cedula} 
        onChange={(e) => setCedula(e.target.value)} 
        placeholder="Enter cedula here"
      />
      <Button onClick={handleSearch}>Buscar</Button>
      {empleado && (
        <div className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 mb-1'>
          {empleado.nombre1_e.substring(0, 20)} {empleado.nombre2_e.substring(0, 20)} {empleado.apellido1_e.substring(0, 20)} {empleado.apellido2_e.substring(0, 20)}
        </div>
      )}
    </div>
  );
};

export default BusquedaEmpleadoCI;
