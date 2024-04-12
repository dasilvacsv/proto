import React, { useEffect } from "react";
import useLocationStore from "@/store/locationStore";
import { parseISO, format } from 'date-fns';

function PaisesFetch() {
  const {estados, cargarEstados, cargando, error} = useLocationStore((state) => ({
    estados: state.estados,
    cargarEstados: state.cargarEstados,
    cargando: state.cargando,
    error: state.error

  }))


  useEffect(() => {
    cargarPaises();
  }, [cargarPaises]);

  if (cargando) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul>
        {paises.map((pais) => {

          return (
            <div
              key={pais.id_pais}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-slate-200 p-4 rounded-xl"
            >
                <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">idPais</h5>
                <span className="text-gray-700 text-sm">{`${pais.id_pais}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre pais</h5>
                <span className="text-gray-700 text-sm">{`${pais.nombre_pais}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">Status Pais</h5>
                <span className="text-gray-700 text-sm">{`${pais.status_pais}`}</span>
              </div>
              
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default PaisesFetch;


