import axios from 'axios'

const BASE_URL = import.meta.env.MODE === "production" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;