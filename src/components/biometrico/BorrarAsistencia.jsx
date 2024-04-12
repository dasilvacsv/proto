import React from 'react';
import useBiometricoStore from '@/store/biometricoStore';
import { Button } from '../ui/button';

function BorrarAsistencia() {
  const { deleteZKTecoAttLogs } = useBiometricoStore();

  const handleDelete = () => {
    if (window.confirm('¿Está usted seguro que desea borrar los registros de asistencia?')) {
      deleteZKTecoAttLogs();
    }
  };

  return (
    <Button onClick={handleDelete}>Borrar Registros</Button>
  );
}

export default BorrarAsistencia;