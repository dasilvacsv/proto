import React, { useEffect } from "react";
import useLocationStore from "@/store/locationStore";
import { parseISO, format } from 'date-fns';

function PaisesFetch() {
  const {municipios, cargarMunicipios, cargando, error} = useLocationStore((state) => ({
    municipios: state.municipios,
    cargarMunicipios: state.cargarMunicipios,
    cargando: state.cargando,
    error: state.error

  }))


  useEffect(() => {
    cargarMunicipios();
  }, [cargarMunicipios]);
  console.log(municipios);

  if (cargando) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul>
        {municipios.map((municipio) => {

          return (
            <div
              key={municipio.id_municipio}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-slate-200 p-4 rounded-xl"
            >
                <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">id_municipio</h5>
                <span className="text-gray-700 text-sm">{`${municipio.id_municipio}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre pais</h5>
                <span className="text-gray-700 text-sm">{`${municipio.nombre_mu}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">Status Pais</h5>
                <span className="text-gray-700 text-sm">{`${municipio.status_mu}`}</span>
              </div>

              
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default PaisesFetch;


