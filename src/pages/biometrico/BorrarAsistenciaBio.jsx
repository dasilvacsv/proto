import LayoutAdmin from '@/layouts/LayoutAdmin'
import React from 'react'
import BorrarAsistencia from '@/components/biometrico/BorrarAsistencia'

function BorrarAsistenciaBio() {
  return (
    <LayoutAdmin>
    <div className="bg-blue-50 p-8 rounded-xl">
        <h1 className='text-5xl text-red-950 font-bold'>Borrar Registros de Asistencia del Dispositivo Biométrico</h1>
      <div className='items-center justify-center text-center m-30'>
      <BorrarAsistencia />
      </div>
      </div>
      </LayoutAdmin>
  )
}

export default BorrarAsistenciaBio