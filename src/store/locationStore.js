// store/locationStore.js
import {create} from 'zustand';
import axios from '../api/axios';

const useLocationStore = create((set) => ({
  paises: [],
  estados: [],
  municipios: [],
  parroquias: [],
  departamentos: [],
  cargos: [],
  cargando: false,
  error: null,

  cargarPaises: async () => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get('ubicacion/pais');
      console.log(respuesta.data); 
      set({ paises: respuesta.data, cargando: false });
    } catch (error) {
      set({ error: error.message, cargando: false });
    }
  },

  cargarEstados: async () => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get('ubicacion/estado');
      console.log(respuesta.data); 
      set({ estadps: respuesta.data, cargando: false });
    } catch (error) {
      set({ error: error.message, cargando: false });
    }
  },



  cargarEstadosPorPaisId: async (paisId) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get(`ubicacion/estado/by-pais/${paisId}`);
      console.log(respuesta.data);
      set({ estados: respuesta.data, cargando: false });
    } catch (error) {
      console.error(`Error al cargar estados para el país ${paisId}:`, error);
      set({ error: error.message, cargando: false });
    }
  },
  cargarMunicipiosPorEstadoId: async (estadoId) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get(`ubicacion/municipio/by-estado/${estadoId}`);
      console.log(respuesta.data);
      set({ municipios: respuesta.data, cargando: false });
    } catch (error) {
      console.error(`Error al cargar municipios para el estado ${estadoId}:`, error);
      set({ error: error.message, cargando: false });
    }
  },

  cargarParroquiasPorMunicipioId: async (municipioId) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get(`ubicacion/parroquia/by-municipio/${municipioId}`);
      console.log(respuesta.data);
      set({ parroquias: respuesta.data, cargando: false });
    } catch (error) {
      console.error(`Error al cargar municipios para el estado ${municipioId}:`, error);
      set({ error: error.message, cargando: false });
    }
  },

  cargarDepartamentos: async () => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get('dpto/departamento');
      console.log(respuesta.data); // Agrega esta línea para depurar
      set({ departamentos: respuesta.data, cargando: false });
    } catch (error) {
      set({ error: error.message, cargando: false });
    }
  },
  // Método adicional para limpiar errores
  limpiarErrores: () => set({ error: null }),

  cargarCargosPorDepartamentoId: async (departamentoId) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get(`dpto/cargo/by-departamento/${departamentoId}`);
      console.log(respuesta.data);
      set({ cargos: respuesta.data, cargando: false });
    } catch (error) {
      console.error(`Error al cargar estados para el país ${departamentoId}:`, error);
      set({ error: error.message, cargando: false });
    }
  },
}));


export default useLocationStore;