import LayoutAdmin from '@/layouts/LayoutAdmin'
import React from 'react'
import AsistenciaBio from '@/components/biometrico/AsistenciaBio'

function GestionUsuariosBio() {
  return (
    <LayoutAdmin>
    <div className="bg-blue-50 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5 className="text-gray-700">userSN</h5>
          <h5 className="text-gray-700">deviceUID</h5>
          <h5 className="text-gray-700">recordTime</h5>
          <h5 className="text-gray-700">ip</h5>
        </div>
      <AsistenciaBio />
      </div>
      </LayoutAdmin>
  )
}

export default GestionUsuariosBio