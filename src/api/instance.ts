import axios from 'axios';

export const BASE_URL = import.meta.env.PROD
  ? `https://${import.meta.env.VITE_PROD_SERVER}`
  : `http://${import.meta.env.VITE_DEV_SERVER}`;

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    'Content-Type': 'application/json',
  },
});
