import axios from 'axios';
import environment from 'config/environment';
import { User } from 'hooks/useUser/interface';

const axiosInstance = axios.create({
  baseURL: `${environment?.VITE_API_BASE_URL}`,
});

//  Interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}') as User;
    if (!user?.token) return config;
    config.headers.Authorization = `Bearer ${user?.token}`;

    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
