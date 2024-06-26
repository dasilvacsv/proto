import LayoutAdmin from '@/layouts/LayoutAdmin'
import React from 'react'
import UsersBio from '@/components/biometrico/UsersBio'

function GestionUsuariosBio() {
  return (
    <LayoutAdmin>
    <div className="bg-blue-50 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5 className="text-gray-700">Cédula</h5>
          <h5 className="text-gray-700">Nombres</h5>
          <h5 className="text-gray-700">Apellidos</h5>
          <h5 className="text-gray-700">Fecha de Nacimiento</h5>
          <h5 className="text-gray-700">Sexo</h5>
        </div>
      <UsersBio />
      </div>
      </LayoutAdmin>
  )
}

export default GestionUsuariosBio