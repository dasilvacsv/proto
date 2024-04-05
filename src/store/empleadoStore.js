// store/employeeStore.js
import { create } from 'zustand';
import axios from '../api/axios';

const useEmployeeStore = create((set) => ({
  empleado: null,
  empleados: [],
  errores: null,
  cargando: false,

  // Acción para registrar un nuevo empleado con datos primordiales
  registrarEmpleado: async (datosEmpleado) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.post('/empleado', datosEmpleado);
      set({ empleado: respuesta.data, errores: null, cargando: false });
      return respuesta.data;  // Retorna los datos del empleado recién creado
    } catch (error) {
      console.error("Error al registrar el empleado:", error.response?.data || error.message);
      set({ errores: error.response.data, cargando: false });
      return null;  // Manejo de errores, retorna null si hay un error
    }
  },
  
  actualizarEmpleado: async (idEmpleado, datosActualizacion) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.patch(`/empleado/${idEmpleado}`, datosActualizacion);
      set({ empleado: respuesta.data, errores: null, cargando: false });
      console.log("Empleado actualizado con éxito:", respuesta.data);
      return respuesta.data;  // Retorna los datos del empleado actualizado
    } catch (error) {
      console.error("Error al actualizar el empleado:", error.response?.data || error.message);
      set({ errores: error.response?.data, cargando: false });
      return null;  // Manejo de errores, retorna null si hay un error
    }
  },


  limpiarErrores: () => set({ errores: null })
}));

export default useEmployeeStore;

