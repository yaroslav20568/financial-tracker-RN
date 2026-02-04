import { API_URL } from '@env';
import axios from 'axios';

const BASE_URL = API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});
