import React, { useEffect } from "react";
import useEmployeeStore from "@/store/empleadoStore";
import { parseISO, format } from 'date-fns';

function EmployeeApp() {
  const { empleados, fetchBasicEmpleadoData, cargando, errores } = useEmployeeStore((state) => ({
    empleados: state.empleados,
    fetchBasicEmpleadoData: state.fetchBasicEmpleadoData,
    cargando: state.cargando,
    errores: state.errores,
  }));

  useEffect(() => {
    fetchBasicEmpleadoData();
  }, [fetchBasicEmpleadoData]);

  if (cargando) return <div>Loading...</div>;
  if (errores) return <div>Error: {errores}</div>;

  return (
    <div>
      <ul>
        {empleados.map((empleado) => {
          const fechaNacimiento = format(parseISO(empleado.fecha_nac_e), 'MM/dd/yyyy');

          return (
            <div
              key={empleado.id_empleado}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-slate-200 p-4 rounded-xl"
            >
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">Cedula</h5>
                <span className="text-gray-700 text-sm">{`${empleado.cedula_e}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre</h5>
                <span className="text-gray-700 text-sm">{`${empleado.nombre1_e} ${empleado.nombre2_e}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">Apellido</h5>
                <span className="text-gray-700 text-sm">{`${empleado.apellido1_e} ${empleado.apellido2_e}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">Fecha</h5>
                <span className="text-gray-700 text-sm">{fechaNacimiento}</span>
              </div>
              <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">Fecha</h5>
              <span className="text-gray-700 text-sm">{`${empleado.sexo_e}`}</span>
            </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default EmployeeApp;


