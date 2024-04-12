import { create } from 'zustand';
import axios from '../api/axios';

const useBiometricoStore = create((set) => ({
  biometricData: {
    time: null,
    attendances: [],
    users: [],
  },
  loading: false,
  errors: null,

  getZKTecoTime: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('/biometrico/time');
      set((state) => ({ biometricData: { ...state.biometricData, time: response.data.time }, loading: false }));
    } catch (error) {
      set({ errors: error, loading: false });
    }
  },

  getZKTecoAttendances: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('/biometrico/asistencia');
      set((state) => ({ biometricData: { ...state.biometricData, attendances: response.data.attendances.data }, loading: false }));
    } catch (error) {
      set({ errors: error, loading: false });
    }
  },

  getZKTecoUsers: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('/biometrico/usuarios');
      console.log(response);
      set((state) => ({ biometricData: { ...state.biometricData, users: response.data.users.data }, loading: false }));
    } catch (error) {
      set({ errors: error, loading: false });
    }
  },

  getZKTecoUserByUid: async (uid) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/biometrico/usuarios/uid/${uid}`);
      set((state) => {
        const users = state.biometricData.users.filter((user) => user.uid !== uid);
        return { biometricData: { ...state.biometricData, users: [...users, response.data] }, loading: false };
      });
    } catch (error) {
      set({ errors: error, loading: false });
    }
  },

  createZKTecoUser: async (createZKTecoUserDto) => {
    set({ loading: true });
    try {
      const response = await axios.post('/biometrico/usuarios', createZKTecoUserDto);
      set((state) => ({ biometricData: { ...state.biometricData, users: [...state.biometricData.users, response.data] }, loading: false }));
    } catch (error) {
      set({ errors: error, loading: false });
    }
  },

  deleteZKTecoAttLogs: async () => {
    set({ loading: true });
    try {
      await axios.post('/biometrico/asistencia');
      set({ biometricData: { ...state.biometricData, attendances: [] }, loading: false });
    } catch (error) {
      set({ errors: error, loading: false });
    }
  },

  clearErrors: () => set({ errors: null }),
  clearBiometricData: () => set({ biometricData: { time: null, attendances: [], users: [] } }),
}));

export default useBiometricoStore;


