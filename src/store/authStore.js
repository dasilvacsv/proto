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
      const res = await axios.post('/usuario/registro', data);
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
      const res = await axios.post('auth/acceso', data);
      if (res.data && res.data.access_token) {
        localStorage.setItem('token', res.data.access_token); 
        set({ user: res.data.user, isAuth: true, errors: null }); 
      }
      return res.data; 
    } catch (error) {
      const errorMessage = Array.isArray(error.response.data) ? error.response.data : [error.response.data.message];
      set({ errors: errorMessage });
    }
  },

  signout: async () => {
    await axios.post('/desconexion');
    localStorage.removeItem('token');
    set({ user: null, isAuth: false, errors: null });
  },

  checkAuth: async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const res = await axios.get('auth/perfil');
        set({ user: res.data, isAuth: true, loading: false });
      } catch (error) {
        console.error(error);
        localStorage.removeItem('token'); 
        set({ isAuth: false, user: null, loading: false });
      }
    } else {
      set({ loading: false });
    }
  },

  clearErrors: () => set({ errors: null })
}));

export default useAuthStore;
