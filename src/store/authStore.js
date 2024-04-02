import {create} from 'zustand';
import axios from '../api/axios';
import Cookie from 'js-cookie';

const useAuthStore = create((set, get) => ({
  user: null,
  isAuth: false,
  errors: null,
  loading: true,

  signup: async (data) => {
    try {
      const res = await axios.post('/registro', data);
      set({ user: res.data, isAuth: true, errors: null });
      return null; 
    } catch (error) {
      const errorMessage = Array.isArray(error.response.data) ? error.response.data : [error.response.data.message];
      set({ errors: errorMessage });
      return false; 
    }
  },

  signin: async (data) => {
    try {
      const res = await axios.post('/acceso', data);
      set({ user: res.data, isAuth: true, errors: null });
      return res.data; 
    } catch (error) {
      const errorMessage = Array.isArray(error.response.data) ? error.response.data : [error.response.data.message];
      set({ errors: errorMessage });
    }
  },

  signout: async () => {
    await axios.post('/desconexion');
    set({ user: null, isAuth: false });
  },

  checkAuth: async () => {
    if (Cookie.get('token')) {
      try {
        const res = await axios.get('/perfil');
        set({ user: res.data, isAuth: true, loading: false });
      } catch (error) {
        console.log(error);
        set({ isAuth: false, user: null, loading: false });
      }
    } else {
      set({ loading: false });
    }
  },

  clearErrors: () => set({ errors: null })
}));

export default useAuthStore;
