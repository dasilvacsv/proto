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
      set({ estados: respuesta.data, cargando: false });
    } catch (error) {
      set({ error: error.message, cargando: false });
    }
  },

  cargarMunicipios: async () => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get('ubicacion/municipio');
      console.log(respuesta.data); 
      set({ municipios: respuesta.data, cargando: false });
    } catch (error) {
      set({ error: error.message, cargando: false });
    }
  },

  cargarParroquia: async () => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get('ubicacion/parroquia');
      console.log(respuesta.data); 
      set({ parroquias: respuesta.data, cargando: false });
    } catch (error) {
      set({ error: error.message, cargando: false });
    }
  },


  cargarEstadosPorPaisId: async (paisId) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get(`ubicacion/estado/by-pais/${paisId}`);
      if (respuesta.data.length === 0) {
        console.log("No se encontraron estados para el país seleccionado.");
      }
      set({ estados: respuesta.data, municipios: [], parroquias: [], cargando: false });
    } catch (error) {
      console.error(`Error al cargar estados para el país ${paisId}:`, error);
      set({ estados: [], municipios: [], parroquias: [], error: error.message, cargando: false });
    }
  },
  cargarMunicipiosPorEstadoId: async (estadoId) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get(`ubicacion/municipio/by-estado/${estadoId}`);
      if (respuesta.data.length === 0) {
        console.log("No se encontraron municipios para el estado seleccionado.");
      }
      set({ municipios: respuesta.data, parroquias: [], cargando: false });
    } catch (error) {
      console.error(`Error al cargar municipios para el estado ${estadoId}:`, error);
      set({ municipios: [], parroquias: [], error: error.message, cargando: false });
    }
  },

  cargarParroquiasPorMunicipioId: async (municipioId) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get(`ubicacion/parroquia/by-municipio/${municipioId}`);
      if (respuesta.data.length === 0) {
        console.log("No se encontraron parroquias para el municipio seleccionado.");
      }
      set({ parroquias: respuesta.data, cargando: false });
    } catch (error) {
      console.error(`Error al cargar parroquias para el municipio ${municipioId}:`, error);
      set({ parroquias: [], error: error.message, cargando: false });
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
  

  cargarCargosPorDepartamentoId: async (departamentoId) => {
    set({ cargando: true });
    try {
      const respuesta = await axios.get(`dpto/cargo/by-departamento/${departamentoId}`);
      if (respuesta.data.length === 0) {
        console.log("No se encontraron cargos para el departamento seleccionado.");
      }
      set({ cargos: respuesta.data, cargando: false });
    } catch (error) {
      console.error(`Error al cargar cargos para el departamento ${departamentoId}:`, error);
      set({ cargos: [], error: error.message, cargando: false });
    }
  },
  
  // Método adicional para limpiar errores
  limpiarErrores: () => set({ error: null }),
}));


export default useLocationStore;