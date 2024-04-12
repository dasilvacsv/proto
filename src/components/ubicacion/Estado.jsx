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
    cargarEstados();
  }, [cargarEstados]);
  console.log(estados);

  if (cargando) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul>
        {estados.map((estado) => {

          return (
            <div
              key={estado.id_estado}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-slate-200 p-4 rounded-xl"
            >
                <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">idEstado</h5>
                <span className="text-gray-700 text-sm">{`${estado.id_estado}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre Estado</h5>
                <span className="text-gray-700 text-sm">{`${estado.nombre_es}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">Status estado</h5>
                <span className="text-gray-700 text-sm">{`${estado.status_es}`}</span>
              </div>
              
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default PaisesFetch;


