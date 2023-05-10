import axios from 'axios';

// export const BASE_URL = `http://${
//   import.meta.env.PROD ? import.meta.env.VITE_PROD_SERVER : import.meta.env.VITE_DEV_SERVER
//   }`;

export const BASE_URL = `http://127.0.0.1:8000`;

console.log(BASE_URL);

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItem('access')}`,
  },
});
