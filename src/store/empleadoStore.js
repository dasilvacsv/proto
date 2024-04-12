// store/employeeStore.js
import { create } from 'zustand';
import axios from '../api/axios';

const useEmployeeStore = create((set) => ({
  empleado: null,
  empleados: [],
  errores: null,
  cargando: false,
  selectedEmployee: null,

  // Acción para registrar un nuevo empleado con datos primordiales
  registrarEmpleado: async (datosEmpleado) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.post('/empleado', datosEmpleado);
      set({ empleado: respuesta.data, errores: null, cargando: false });
      return respuesta.data;  // Retorna los datos del empleado recién creado
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Error desconocido al registrar el empleado';
      console.error("Error al registrar el empleado:", errorMessage);
      set({ errores: { message: errorMessage }, cargando: false });
      return null;     
    }

  },
  
  actualizarEmpleado: async (idEmpleado, datosActualizacion) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.patch(`/empleado/${idEmpleado}`, datosActualizacion);
      set({ empleado: respuesta.data, errores: null, cargando: false });
      console.log("Empleado actualizado con éxito:", respuesta.data);
      return respuesta.data; 
    } catch (error) {
      console.error("Error al actualizar el empleado:", error.response?.data || error.message);
      set({
        errores: error.response?.data?.error ? { message: error.response.data.error } : { message: error.message },
        cargando: false
      });
      return null;
    }
  },

  fetchEmpleados: async () => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get('/empleado');
      console.log(respuesta.data);
      set({ empleados: respuesta.data, errores: null, cargando: false });
      console.log("Todos los empleados han sido cargados con éxito.");
    } catch (error) {
      console.error("Error al cargar los empleados:", error.response?.data || error.message);
      set({ errores: error.response?.data, cargando: false });
    }
  },

  fetchEmpleadoPorId: async (idEmpleado) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get(`/empleado/${idEmpleado}`);
      set({ empleado: respuesta.data, errores: null, cargando: false });
      console.log("Empleado cargado con éxito:", respuesta.data);
    } catch (error) {
      console.error("Error al cargar el empleado:", error.response?.data || error.message);
      set({ errores: error.response?.data, cargando: false });
    }
  },

  fetchBasicEmpleadoData: async () => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get('/empleado/basic-data');
      console.log(respuesta.data);
      set({ empleados: respuesta.data, errores: null, cargando: false });
    } catch (error) {
      console.error("Error al cargar datos básicos de empleados:", error.response?.data || error.message);
      set({ errores: error.response?.data, cargando: false });
    }
  },

  fetchEmpleadoPorCedula: async (cedula) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get(`/empleado/cedula/${cedula}`);
      set({ empleado: respuesta.data, errores: null, cargando: false, selectedEmployee: respuesta.data }); // Update this line
      console.log("Empleado cargado con éxito:", respuesta.data);
    } catch (error) {
      console.error("Error al cargar el empleado:", error.response?.data || error.message);
      set({ errores: error.response?.data, cargando: false });
    }
  },


  limpiarErrores: () => set({ errores: null })
}));

export default useEmployeeStore;

