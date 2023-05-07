import axios from 'axios';

export const BASE_URL = `http://${
  import.meta.env.PROD ? import.meta.env.VITE_PROD_SERVER : import.meta.env.VITE_DEV_SERVER
}`;

console.log(BASE_URL);

export const instance = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem('user-token')}`,
  // },
});